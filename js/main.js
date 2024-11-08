import bd_options from './../data-presets/data-options-config.js';
import bd_data from './../data-presets/data1.js';
import { createHeader } from './../components/header.js';
import { createFooter } from './../components/footer.js';
import configShop from './server.js'

const init = () => {
    document.title = `${document.title} | ${configShop.nameCommecial}`
    createHeader();
    createFooter();
    function replaceBrandText() {
        function traverseAndReplace(node) {
            if (node.nodeType === Node.TEXT_NODE && node.nodeValue.includes("$BRAND$")) {
                node.nodeValue = node.nodeValue.replace(/\$BRAND\$/g, configShop.nameCommecial)
            }
            else if (node.nodeType === Node.ELEMENT_NODE) {
                node.childNodes.forEach(childNode => traverseAndReplace(childNode))
            }
        }
        traverseAndReplace(document.body);
    }
    replaceBrandText()
};
init();
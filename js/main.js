import { $ } from './../components/utils.js';
import { createHeader } from './../components/header.js';
import { createFooter } from './../components/footer.js';
import configShop from './server.js';

const init = () => {
    let titleText = $('#current-site:not([data-pre])');
    if (titleText) {
        titleText.innerText = document.title;
    }
    document.title = `${document.title} | ${configShop.nameCommecial}`;

    createHeader();
    createFooter();

    function replaceBrandText() {
        function traverseAndReplace(node) {
            if (node.nodeType === Node.TEXT_NODE && node.nodeValue.includes("$BRAND$")) {
                node.nodeValue = node.nodeValue.replace(/\$BRAND\$/g, configShop.nameCommecial);
            } else if (node.nodeType === Node.ELEMENT_NODE) {
                node.childNodes.forEach(childNode => traverseAndReplace(childNode));
            }
        }
        traverseAndReplace(document.body);
    }
    replaceBrandText();

    window.addEventListener('scroll', function () {
        const scrollY = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollY > 120) {
            $('header').classList.replace('maximize', 'minimize');
        } else {
            $('header').classList.replace('minimize', 'maximize');
        }
    });

    
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.display = 'none'; 
    }, 1000);
};

init();
import { $ } from './../components/utils.js';
import { createHeader } from './../components/header.js';
import { createFooter } from './../components/footer.js';
import configShop from './server.js';
import { createElement } from '../components/composer.js';

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

    
    let loaderBox = createElement('div', {
        className: 'loader-cont',
        innerHTML: /*html*/`
            <span class="loader"></span>
        `
    })
    document.body.appendChild(loaderBox)
    document.body.classList.add('load')
    window.addEventListener('load', function() {
        setTimeout(function() {
            loaderBox.classList.add('close')
            setTimeout(function() {
                loaderBox.remove()
            }, 300)
        }, 1200)
    })
};

init();
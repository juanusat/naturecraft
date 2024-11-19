import { $ } from './utils.js';
import { createElement } from './composer.js';

export const createFooter = () => {
    const footer = createElement('footer', { innerHTML: /*html*/`
        <div class="footer-map">
        <div class="footer-map-box">
            <div class="footer-col">
                <img src="./media/brand/brand-logo-w.svg" alt="logo" class="logo-footer">
                <div class="social-links">
                    <a href="#" class="social-link">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#" class="social-link">
                        <i class="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#" class="social-link">
                        <i class="fa-brands fa-facebook"></i>
                    </a>
                    <a href="#" class="social-link">
                        <i class="fa-brands fa-youtube"></i>
                    </a>
                </div>
            </div>
            <div class="footer-col">
                <a class="footer-col-title" href="about.html"><span>Sobre nosotros</span></a>
                <ul>
                    <a href="#"><span>Historia de $BRAND$</span></a>
                    <a href="#"><span>Conoce a los artistas</span></a>
                    <a href="#"><span>Misión y visión</span></a>
                </ul>
            </div>
            <div class="footer-col">
                <a class="footer-col-title" href="blog.html"><span>Blog</span></a>
                <ul>
                    <a href="#"><span>Artículos educativos</span></a>
                    <a href="#"><span>Historias de creación</span></a>
                </ul>
            </div>
            <div class="footer-col">
                <a class="footer-col-title" href="contact.html"><span>Contacto</span></a>
                <ul>
                    <a href="#"><span>Formulario de consultas</span></a>
                    <a href="#"><span>Información de contacto</span></a>
                    <a href="#"><span>Redes sociales</span></a>
                </ul>
            </div>
            <div class="footer-col">
                <a class="footer-col-title" href="support.html"><span>Soporte</span></a>
                <ul>
                    <a href="#"><span>Preguntas frecuentes</span></a>
                    <a href="#"><span>Chat en vivo</span></a>
                    <a href="#"><span>Sección de ayuda</span></a>
                </ul>
            </div>
        </div>
    </div>
    <div class="footer-sub">Todos los derechos reservados para Fiestas inc malvados y asociados &copy; Pimentel, Perú 2024</div>`});
    $('.main').appendChild(footer);
};
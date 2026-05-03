/**
 * MAIN.JS - El Director de Orquesta
 */

// --- 1. FUNCIÓN GLOBAL (AFUERA PARA QUE EL BOTÓN LA VEA) ---
function abrirModal(e, nombre, descripcion, imagen) {
    // Evitamos que el navegador haga cosas raras con el clic
    if (e) {
        e.preventDefault();
        e.stopPropagation();
    }

    const modal = document.getElementById("modal-producto");
    document.getElementById("modal-titulo").innerText = nombre;
    document.getElementById("modal-descripcion").innerText = descripcion;
    document.getElementById("modal-img").src = imagen;

    modal.style.display = "flex";

    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
}

function cerrarModal() {
    const modal = document.getElementById("modal-producto");
    modal.style.display = "none";

    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
}

// Cerrar modal
document.addEventListener('click', function (event) {
    const modal = document.getElementById('modal-producto');

    if (event.target.classList.contains('close-modal') || event.target === modal) {
        cerrarModal();
    }
});

// --- INICIO ---
document.addEventListener('DOMContentLoaded', () => {
    const buscador = document.getElementById("buscador");
    const burgerBtn = document.getElementById('burger-btn');
    const navMenu = document.getElementById('nav-menu');

    // MENÚ HAMBURGUESA
    if (burgerBtn && navMenu) {
        burgerBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const spans = burgerBtn.querySelectorAll('span');

            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
            } else {
                resetBurger(spans);
            }
        });

        const links = navMenu.querySelectorAll('.nav-btn');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                resetBurger(burgerBtn.querySelectorAll('span'));
            });
        });
    }

    function resetBurger(spans) {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }

    // CARGA INICIAL
    actualizarTodasLasSecciones("");

    // BUSCADOR
    if (buscador) {
        buscador.addEventListener("input", (e) => {
            const textoBusqueda = e.target.value.toLowerCase();
            actualizarTodasLasSecciones(textoBusqueda);
        });
    }

    function actualizarTodasLasSecciones(termino) {
        if (typeof productos !== 'undefined') {
            const filtrados = productos.filter(p => filtrarItem(p, termino));
            const contenedor = document.getElementById("contenedor-productos");
            renderizar(contenedor, filtrados, "producto-card", "img-container", "info");
        }

        if (typeof figuras !== 'undefined') {
            const filtrados = figuras.filter(f => filtrarItem(f, termino));
            const contenedor = document.querySelector(".figures-grid");
            renderizar(contenedor, filtrados, "figure-card", "figure-img", "figure-info");
        }

        if (typeof juegosMesa !== 'undefined') {
            const filtrados = juegosMesa.filter(j => filtrarItem(j, termino));
            const contenedor = document.querySelector(".boardgames-grid");
            renderizar(contenedor, filtrados, "bg-card", "bg-img", "bg-info");
        }
    }

    function filtrarItem(item, termino) {
        const nombre = (item.nombre || "").toLowerCase();
        const categoria = (item.categoria || "").toLowerCase();
        const desc = (item.descripcion || "").toLowerCase();
        return nombre.includes(termino) || categoria.includes(termino) || desc.includes(termino);
    }

    function renderizar(contenedor, lista, claseCard, claseImg, claseInfo) {
        if (!contenedor) return;
        contenedor.innerHTML = "";

        if (lista.length === 0) {
            contenedor.innerHTML = `
                <p style="grid-column: 1 / -1; text-align: center; color: #999; padding: 40px;">
                    No se encontraron resultados.
                </p>`;
            return;
        }

        lista.forEach(item => {
            const card = document.createElement("div");
            card.className = claseCard;

            const n = item.nombre.replace(/'/g, "\\'");
            const d = item.descripcion ? item.descripcion.replace(/'/g, "\\'").replace(/\n/g, " ") : "";

            card.innerHTML = `
                <div class="${claseImg}">
                    <img src="${item.imagen}">
                </div>
                <div class="${claseInfo}">
                    <p class="categoria">${item.categoria || 'Coleccionable'}</p>
                    <h3>${item.nombre}</h3>
                    <p class="descripcion">${item.descripcion || ""}</p>
                    
                    <button type="button" class="btn-detalles-card" onclick="abrirModal(event, '${n}', '${d}', '${item.imagen}')">
                        VER DETALLES
                    </button>
                </div>
            `;
            contenedor.appendChild(card);
        });
    }

    // SCROLL HEADER
    window.onscroll = function () {
        const header = document.querySelector('.top-sticky-container');
        if (header) {
            header.style.top = (window.pageYOffset > 28) ? "0" : "28px";
        }
    };
});

// --- BEST SELLERS ---
function iniciarBestSellers() {
    const track = document.getElementById('best-sellers-track');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    if (!track) return;

    const destacados = productos.filter(p => p.destacado === true);
    const mostrar = destacados.length > 0 ? destacados : productos.slice(0, 5);

    track.innerHTML = "";

    mostrar.forEach(item => {
        const card = document.createElement('div');
        card.className = 'producto-card';
        card.innerHTML = `
            <div class="img-container">
                <img src="${item.imagen}">
            </div>
            <div class="info-card">
                <p class="categoria-card">${item.categoria}</p>
                <h3>${item.nombre}</h3>
            </div>
        `;
        track.appendChild(card);
    });

    const getScrollStep = () => {
        const firstCard = track.querySelector('.producto-card');
        return firstCard ? firstCard.offsetWidth + 25 : 300;
    };

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            track.scrollBy({ left: getScrollStep(), behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            track.scrollBy({ left: -getScrollStep(), behavior: 'smooth' });
        });
    }

    let autoPlayInterval;

    const startAutoPlay = () => {
        autoPlayInterval = setInterval(() => {
            if (track.scrollLeft + track.offsetWidth >= track.scrollWidth - 10) {
                track.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                track.scrollBy({ left: getScrollStep(), behavior: 'smooth' });
            }
        }, 4000);
    };

    const stopAutoPlay = () => clearInterval(autoPlayInterval);

    if (mostrar.length > 0) {
        startAutoPlay();
        track.addEventListener('mouseenter', stopAutoPlay);
        track.addEventListener('mouseleave', startAutoPlay);
        track.addEventListener('touchstart', stopAutoPlay);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (typeof productos !== 'undefined') {
        iniciarBestSellers();
    }
});
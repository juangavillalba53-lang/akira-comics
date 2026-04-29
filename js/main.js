/**
 * MAIN.JS - El Director de Orquesta
 * Maneja la carga inicial, el filtrado universal y la navegación móvil.
 */

// --- 1. FUNCIÓN GLOBAL (AFUERA PARA QUE EL BOTÓN LA VEA) ---
function abrirModal(nombre, descripcion, imagen) {
    const modal = document.getElementById("modal-producto");

    // Llenamos los datos
    document.getElementById("modal-titulo").innerText = nombre;
    document.getElementById("modal-descripcion").innerText = descripcion;
    document.getElementById("modal-img").src = imagen;

    // Mostramos el modal
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Bloquea el scroll de fondo
}

// Lógica para cerrar el modal al tocar la X o afuera
document.addEventListener("click", (e) => {
    const modal = document.getElementById("modal-producto");
    if (modal && (e.target.classList.contains("close-modal") || e.target === modal)) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
});

// --- 2. LÓGICA DE INICIO Y EVENTOS ---
document.addEventListener('DOMContentLoaded', () => {
    const buscador = document.getElementById("buscador");
    const burgerBtn = document.getElementById('burger-btn');
    const navMenu = document.getElementById('nav-menu');

    // --- MENÚ HAMBURGUESA (Tu código intacto) ---
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

    // --- CARGA INICIAL Y BUSCADOR ---
    actualizarTodasLasSecciones("");

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
            contenedor.innerHTML = `<p style="grid-column: 1 / -1; text-align: center; color: #999; padding: 40px;">No se encontraron resultados.</p>`;
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
                    
                    <p class="descripcion">${item.descripcion}</p>
                    
                    <button class="btn-detalles-card" onclick="abrirModal('${n}', '${d}', '${item.imagen}')">
                        VER DETALLES
                    </button>
                </div>
            `;
            contenedor.appendChild(card);
        });
    }

    // Efecto Scroll Header
    window.onscroll = function () {
        const header = document.querySelector('.top-sticky-container');
        if (header) {
            header.style.top = (window.pageYOffset > 28) ? "0" : "28px";
        }
    };
});
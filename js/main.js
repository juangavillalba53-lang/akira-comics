/**
 * MAIN.JS - El Director de Orquesta
 */

let filtroActual = "todos";

// --- MODAL ---
function abrirModal(e, nombre, descripcion, imagen) {
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
    document.querySelector('.modal-body').scrollTop = 0;
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

// --- INICIO PRINCIPAL ---
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
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        function resetBurger(spans) {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }

        const links = navMenu.querySelectorAll('a');

        links.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');

                const spans = burgerBtn.querySelectorAll('span');
                resetBurger(spans);
            });
        });
    }

    // --- FUNCIONES INTERNAS ---

    function filtrarItem(item, termino) {
        const nombre = (item.nombre || "").toLowerCase();
        const tipo = (item.tipo || "").toLowerCase();
        const desc = (item.descripcion || "").toLowerCase();

        const coincideBusqueda =
            nombre.includes(termino) ||
            categoria.includes(termino) ||
            desc.includes(termino);

        const coincideFiltro =
            filtroActual === "todos" ||
            tipo.includes(filtroActual);

        return coincideBusqueda && coincideFiltro;
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
                    
                    <button type="button" class="btn-detalles-card"
                        onclick="abrirModal(event, '${n}', '${d}', '${item.imagen}')">
                        VER DETALLES
                    </button>
                </div>
            `;
            contenedor.appendChild(card);
        });
    }

    function actualizarTodasLasSecciones(termino) {

        // 🔥 PRODUCTOS (CON FILTRO)
        if (typeof productos !== 'undefined') {
            const filtrados = productos.filter(p => filtrarItem(p, termino));
            renderizar(
                document.getElementById("contenedor-productos"),
                filtrados,
                "producto-card",
                "img-container",
                "info"
            );
        }

        // 🔥 FIGURAS (SIN FILTRO)
        if (typeof figuras !== 'undefined') {
            renderizar(
                document.querySelector(".figures-grid"),
                figuras,
                "figure-card",
                "figure-img",
                "figure-info"
            );
        }

        // 🔥 JUEGOS (SIN FILTRO)
        if (typeof juegosMesa !== 'undefined') {
            renderizar(
                document.querySelector(".boardgames-grid"),
                juegosMesa,
                "bg-card",
                "bg-img",
                "bg-info"
            );
        }
    }

    // --- CARGA INICIAL ---
    actualizarTodasLasSecciones("");

    // BUSCADOR (solo afecta productos ahora)
    if (buscador) {
        buscador.addEventListener("input", (e) => {
            actualizarTodasLasSecciones(e.target.value.toLowerCase());
        });
    }

    // 🔥 FILTROS (solo productos)
    const botonesFiltro = document.querySelectorAll(".filtros-cartas button");

    botonesFiltro.forEach(btn => {
        btn.addEventListener("click", () => {
            filtroActual = btn.dataset.filtro;

            botonesFiltro.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            actualizarTodasLasSecciones("");
        });
    });

    // SCROLL HEADER
    window.onscroll = function () {
        const header = document.querySelector('.top-sticky-container');
        if (header) {
            header.style.top = (window.pageYOffset > 28) ? "0" : "28px";
        }
    };

    // 🔥 INICIAR BEST SELLERS
    if (typeof productos !== 'undefined') {
        iniciarBestSellers();
    }
});


// --- BEST SELLERS (NETFLIX STYLE) ---
function iniciarBestSellers() {
    const track = document.getElementById('best-sellers-track');
    const container = document.querySelector('.carousel-container');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    if (!track) return;

    const todo = [
        ...(typeof productos !== 'undefined' ? productos : []),
        ...(typeof figuras !== 'undefined' ? figuras : [])
    ];

    const destacados = todo.filter(item => item.destacado === true);
    const mostrar = destacados.length > 0 ? destacados : todo;

    track.innerHTML = "";

    mostrar.forEach(item => {
        const card = document.createElement('div');
        card.className = 'producto-card';

        card.innerHTML = `
            <div class="img-container">
                <img src="${item.imagen}">
            </div>
            <div class="info-card">
                <p class="categoria-card">${item.categoria || 'Coleccionable'}</p>
                <h3>${item.nombre}</h3>
            </div>
        `;

        track.appendChild(card);
    });

    const getScrollAmount = () => {
        const card = track.querySelector('.producto-card');
        return card ? card.offsetWidth * 2.5 : 600;
    };

    if (nextBtn && prevBtn) {
        nextBtn.onclick = () => track.scrollBy({ left: getScrollAmount(), behavior: "smooth" });
        prevBtn.onclick = () => track.scrollBy({ left: -getScrollAmount(), behavior: "smooth" });
    }

    // DOTS
    const dotsContainer = document.getElementById("carousel-dots");

    function crearDots() {
        if (!dotsContainer) return;

        dotsContainer.innerHTML = "";
        const total = Math.ceil((track.scrollWidth - track.clientWidth) / getScrollAmount()) + 1;

        for (let i = 0; i < total; i++) {
            const dot = document.createElement("span");
            dot.addEventListener("click", () => {
                track.scrollTo({ left: i * getScrollAmount(), behavior: "smooth" });
            });
            dotsContainer.appendChild(dot);
        }
    }

    function actualizarDots() {
        const dots = document.querySelectorAll("#carousel-dots span");
        const index = Math.round(track.scrollLeft / getScrollAmount());
        dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
    }

    crearDots();
    actualizarDots();
    track.addEventListener("scroll", actualizarDots);

    // FADE
    function actualizarFade() {
        const max = track.scrollWidth - track.clientWidth;
        container.classList.toggle('no-left', track.scrollLeft <= 5);
        container.classList.toggle('no-right', track.scrollLeft >= max - 5);
    }

    actualizarFade();
    track.addEventListener('scroll', actualizarFade);

    // AUTOPLAY
    setInterval(() => {
        const max = track.scrollWidth - track.clientWidth;

        if (track.scrollLeft >= max - 5) {
            track.scrollTo({ left: 0, behavior: "smooth" });
        } else {
            track.scrollBy({ left: getScrollAmount(), behavior: "smooth" });
        }
    }, 5000);
}
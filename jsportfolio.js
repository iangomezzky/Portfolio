const splash = document.getElementById("splash-screen");

if (splash) {

    if (sessionStorage.getItem("splashVisto")) {

        splash.classList.add("ocultar");
        splash.style.transition = "none";

    } else {

        sessionStorage.setItem("splashVisto", "true");

        setTimeout(() => {
            splash.classList.add("ocultar");
        }, 2500);

    }

}
const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {
            entrada.target.classList.add("mostrar");
        } else {
            entrada.target.classList.remove("mostrar");
        }

    });
}, {
    threshold: 0.1
});

const elementosAocultar = document.querySelectorAll(".oculto");

elementosAocultar.forEach((el) => observador.observe(el));



const contacto = document.querySelector(".contacto");
const lista = document.querySelector(".listadrop");

if (contacto && lista) {
    contacto.addEventListener("click", () => {
        lista.classList.toggle("activo");
    });
}

const botonesConstruccion = document.querySelectorAll(".en-construccion");
const toast = document.querySelector(".toast-construccion");

botonesConstruccion.forEach((boton) => {

    boton.addEventListener("click", (e) => {

        e.preventDefault();

        toast.classList.add("mostrar");

        clearTimeout(window.toastTimer);

        window.toastTimer = setTimeout(() => {
            toast.classList.remove("mostrar");
        }, 2500);

    });

});

const mensajeContacto = document.getElementById("mensajeContacto");
const contadorMensaje = document.getElementById("contadorMensaje");
const enviarMail = document.getElementById("enviarMail");
const enviarWsp = document.getElementById("enviarWsp");

if (mensajeContacto && contadorMensaje) {
    mensajeContacto.addEventListener("input", () => {
        contadorMensaje.textContent = mensajeContacto.value.length;
    });
}

function datosContacto() {
    const email = document.getElementById("emailContacto")?.value || "";
    const asunto = document.getElementById("asuntoContacto")?.value || "Contacto desde portfolio";
    const mensaje = document.getElementById("mensajeContacto")?.value || "";

    return { email, asunto, mensaje };
}

if (enviarMail) {
    enviarMail.addEventListener("click", () => {
        const datos = datosContacto();

        const cuerpo = `Email de contacto: ${datos.email}%0D%0A%0D%0A${datos.mensaje}`;
        const url = `https://mail.google.com/mail/?view=cm&fs=1&to=iangomezkurgansky@gmail.com&su=${encodeURIComponent(datos.asunto)}&body=${cuerpo}`;

        window.open(url, "_blank");
    });
}

if (enviarWsp) {
    enviarWsp.addEventListener("click", () => {
        const datos = datosContacto();

        const texto = `Hola Ian, vi tu portfolio.%0A%0AAsunto: ${datos.asunto}%0AEmail: ${datos.email}%0A%0AMensaje: ${datos.mensaje}`;
        const url = `https://wa.me/543425147213?text=${texto}`;

        window.open(url, "_blank");
    });
}


const encantamientos = document.querySelectorAll(".encantamiento");

const simbolosEncantados = [
    "ᚠ", "ᚱ", "ᚲ", "ᚷ", "ᚹ", "ᛃ", "ᛇ", "ᛈ", "ᛉ", "ᛟ",
    "∆", "∴", "∵", "∑", "∞", "◊", "◇", "◆", "✦", "✧"
];

encantamientos.forEach((elemento) => {
    const textoOriginal = elemento.dataset.texto;

    elemento.addEventListener("mouseenter", () => {
        let vueltas = 0;

        const intervalo = setInterval(() => {
            elemento.textContent = textoOriginal
                .split("")
                .map((letra) => {
                    if (letra === " ") return " ";

                    return simbolosEncantados[
                        Math.floor(Math.random() * simbolosEncantados.length)
                    ];
                })
                .join("");

            vueltas++;

            if (vueltas > 12) {
                clearInterval(intervalo);
                elemento.textContent = textoOriginal;
            }
        }, 55);
    });
});


const terminalEaster = document.getElementById("terminalEaster");
const connectionMessage = document.getElementById("connectionMessage");

let secuenciaIan = "";

document.addEventListener("keydown", (e) => {
    const activo = document.activeElement;

    if (activo && (activo.tagName === "INPUT" || activo.tagName === "TEXTAREA")) {
        return;
    }

    secuenciaIan += e.key.toLowerCase();

    if (secuenciaIan.length > 10) {
        secuenciaIan = secuenciaIan.slice(-10);
    }

    if (secuenciaIan.includes("ian")) {
        terminalEaster?.classList.add("activo");

        setTimeout(() => {
            terminalEaster?.classList.remove("activo");
        }, 6000);

        secuenciaIan = "";
    }
});

const puntoSecreto = document.getElementById("palabracolor");

puntoSecreto?.addEventListener("click", () => {
    connectionMessage?.classList.add("activo");
    document.body.classList.add("connection-active");

    setTimeout(() => {
        connectionMessage?.classList.remove("activo");
        document.body.classList.remove("connection-active");
    }, 3000);
});
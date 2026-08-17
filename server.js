import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

const LOGO_URL =
    "https://upload.wikimedia.org/wikipedia/commons/2/2e/Logo_Naval_Special_Warfare_Development_Group.svg";

const INFO_IMAGE_URL =
    "https://cdn.discordapp.com/attachments/1526821659221430272/1539009419281436764/701562AE-1081-48BC-BE83-FE1C39250C9D.jpg?ex=6a84c1b6&is=6a837036&hm=6f9ddda2b55b32a87f4e443e3d627f6aeac22a63be923ddd89072a2a3ee0f677";

const styles = `
    <style>
        :root {
            --bg: #080a0d;
            --surface: #101318;
            --surface-light: #171b21;
            --border: rgba(255, 255, 255, 0.08);
            --text: #f5f7fa;
            --muted: #9ca3af;
            --accent: #ffaf1a;
            --accent-hover: #ffc04d;
            --success: #4ade80;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            min-height: 100vh;
            background:
                radial-gradient(
                    circle at 50% -20%,
                    rgba(255, 175, 26, 0.12),
                    transparent 45%
                ),
                var(--bg);
            color: var(--text);
            font-family:
                Inter,
                -apple-system,
                BlinkMacSystemFont,
                "Segoe UI",
                Roboto,
                Helvetica,
                Arial,
                sans-serif;
            line-height: 1.6;
        }

        a {
            color: inherit;
            text-decoration: none;
        }

        /* =========================
           NAVBAR
        ========================= */

        .navbar {
            width: 100%;
            border-bottom: 1px solid var(--border);
            background: rgba(8, 10, 13, 0.82);
            backdrop-filter: blur(14px);
            -webkit-backdrop-filter: blur(14px);
            position: sticky;
            top: 0;
            z-index: 10;
        }

        .nav-inner {
            width: min(1100px, calc(100% - 40px));
            min-height: 72px;
            margin: 0 auto;

            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 24px;
        }

        .brand {
            display: flex;
            align-items: center;
            gap: 12px;

            font-weight: 800;
            letter-spacing: 0.08em;
        }

        .brand-logo {
            width: 40px;
            height: 40px;

            border-radius: 10px;

            object-fit: contain;

            background: rgba(255, 255, 255, 0.04);
            border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .brand-fallback {
            width: 40px;
            height: 40px;

            display: grid;
            place-items: center;

            border-radius: 10px;

            background: rgba(255, 175, 26, 0.08);
            border: 1px solid rgba(255, 175, 26, 0.3);

            color: var(--accent);

            font-size: 13px;
            font-weight: 900;
        }

        .brand-name {
            font-size: 15px;
            letter-spacing: 0.12em;
        }

        .nav-links {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .nav-icon {
            width: 42px;
            height: 42px;

            display: grid;
            place-items: center;

            border-radius: 10px;

            color: var(--muted);

            border: 1px solid transparent;

            transition:
                color 0.2s ease,
                background 0.2s ease,
                border-color 0.2s ease,
                transform 0.2s ease;
        }

        .nav-icon:hover {
            color: var(--text);
            background: var(--surface);
            border-color: var(--border);
            transform: translateY(-1px);
        }

        .nav-icon svg {
            width: 19px;
            height: 19px;
            stroke: currentColor;
            fill: none;
            stroke-width: 1.8;
            stroke-linecap: round;
            stroke-linejoin: round;
        }

        /* =========================
           GENERAL
        ========================= */

        .container {
            width: min(1000px, calc(100% - 40px));
            margin: 0 auto;
        }

        /* =========================
           HERO
        ========================= */

        .hero {
            min-height: calc(100vh - 72px);

            display: flex;
            align-items: center;
            justify-content: center;

            padding: 80px 0;
        }

        .hero-content {
            width: 100%;
            text-align: center;
        }

        .badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;

            padding: 7px 12px;

            border: 1px solid rgba(255, 175, 26, 0.22);
            border-radius: 999px;

            background: rgba(255, 175, 26, 0.06);

            color: var(--accent);

            font-size: 12px;
            font-weight: 700;

            letter-spacing: 0.08em;
            text-transform: uppercase;

            margin-bottom: 24px;
        }

        .badge-dot {
            width: 7px;
            height: 7px;

            border-radius: 50%;

            background: var(--accent);

            box-shadow:
                0 0 12px rgba(255, 175, 26, 0.65);
        }

        h1 {
            font-size: clamp(42px, 8vw, 78px);
            line-height: 0.98;

            letter-spacing: -0.045em;
            font-weight: 900;

            margin-bottom: 22px;
        }

        .hero-description {
            max-width: 650px;

            margin: 0 auto;

            color: var(--muted);

            font-size: 18px;
            line-height: 1.7;
        }

        /*
         * Esta sección reemplaza el antiguo botón
         * "Continuar".
         */

        .info-section {
            margin-top: 65px;

            display: grid;
            grid-template-columns: 1fr 1fr;

            gap: 18px;

            text-align: left;
        }

        .info-card {
            background: rgba(16, 19, 24, 0.82);

            border: 1px solid var(--border);

            border-radius: 16px;

            overflow: hidden;
        }

        .info-image {
            width: 100%;
            height: 280px;

            display: block;

            object-fit: cover;

            border-bottom: 1px solid var(--border);
        }

        .info-content {
            padding: 28px;
        }

        .info-label {
            color: var(--accent);

            font-size: 12px;
            font-weight: 800;

            letter-spacing: 0.1em;
            text-transform: uppercase;

            margin-bottom: 10px;
        }

        .info-content h2 {
            font-size: 24px;

            margin-bottom: 12px;
        }

        .info-content p {
            color: var(--muted);

            font-size: 14px;
            line-height: 1.75;
        }

        .info-points {
            display: grid;

            gap: 10px;

            padding: 28px;
        }

        .info-point {
            display: flex;
            gap: 12px;

            padding: 15px;

            border-radius: 10px;

            background: rgba(255, 255, 255, 0.025);

            border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .info-point-icon {
            width: 30px;
            height: 30px;

            flex: 0 0 30px;

            display: grid;
            place-items: center;

            border-radius: 8px;

            background: rgba(255, 175, 26, 0.08);

            color: var(--accent);
        }

        .info-point-icon svg {
            width: 16px;
            height: 16px;

            stroke: currentColor;
            fill: none;

            stroke-width: 1.8;
            stroke-linecap: round;
            stroke-linejoin: round;
        }

        .info-point strong {
            display: block;

            font-size: 14px;

            margin-bottom: 2px;
        }

        .info-point span {
            color: var(--muted);

            font-size: 13px;
        }

        /* =========================
           LEGAL PAGES
        ========================= */

        .page {
            padding: 70px 0 100px;
        }

        .legal-header {
            margin-bottom: 38px;
        }

        .legal-header h1 {
            font-size: clamp(36px, 6vw, 56px);

            margin-bottom: 14px;
        }

        .legal-header p {
            color: var(--muted);
        }

        .legal-content {
            background: rgba(16, 19, 24, 0.78);

            border: 1px solid var(--border);

            border-radius: 16px;

            padding: clamp(24px, 5vw, 48px);
        }

        .legal-content h2 {
            font-size: 20px;

            margin-top: 32px;
            margin-bottom: 10px;
        }

        .legal-content h2:first-child {
            margin-top: 0;
        }

        .legal-content p {
            color: #c4c8cf;

            margin-bottom: 14px;
        }

        /* =========================
           CALLBACK
        ========================= */

        .callback {
            min-height: calc(100vh - 72px);

            display: flex;
            align-items: center;
            justify-content: center;

            padding: 60px 0;
        }

        .callback-card {
            width: min(560px, 100%);

            text-align: center;

            background: rgba(16, 19, 24, 0.9);

            border: 1px solid var(--border);

            border-radius: 18px;

            padding: 48px 32px;

            box-shadow:
                0 24px 80px rgba(0, 0, 0, 0.35);
        }

        .success-icon {
            width: 68px;
            height: 68px;

            margin: 0 auto 24px;

            display: grid;
            place-items: center;

            border-radius: 50%;

            border: 1px solid rgba(74, 222, 128, 0.25);

            background: rgba(74, 222, 128, 0.08);

            color: var(--success);

            font-size: 30px;
            font-weight: 900;
        }

        .callback-card h1 {
            font-size: clamp(32px, 6vw, 46px);

            margin-bottom: 14px;
        }

        .callback-card p {
            color: var(--muted);

            max-width: 430px;

            margin: 0 auto;
        }

        .callback-note {
            margin-top: 24px;

            padding: 14px 16px;

            border-radius: 10px;

            background: rgba(255, 255, 255, 0.03);

            border: 1px solid var(--border);

            color: #b8bdc6;

            font-size: 13px;
        }

        /* =========================
           FOOTER
        ========================= */

        footer {
            border-top: 1px solid var(--border);

            padding: 28px 0;

            color: #737983;

            font-size: 13px;
        }

        .footer-inner {
            width: min(1000px, calc(100% - 40px));

            margin: 0 auto;

            display: flex;

            justify-content: space-between;
            align-items: center;

            gap: 20px;
        }

        .footer-links {
            display: flex;
            gap: 18px;
        }

        .footer-links a:hover {
            color: var(--text);
        }

        /* =========================
           RESPONSIVE
        ========================= */

        @media (max-width: 760px) {
            .nav-inner {
                min-height: 64px;
            }

            .info-section {
                grid-template-columns: 1fr;
            }

            .info-image {
                height: 240px;
            }

            .hero {
                min-height: auto;
                padding: 70px 0;
            }

            .footer-inner {
                flex-direction: column;
                text-align: center;
            }
        }

        @media (max-width: 480px) {
            .container,
            .nav-inner,
            .footer-inner {
                width: min(100% - 28px, 1000px);
            }

            .brand-name {
                font-size: 13px;
            }

            .brand-logo,
            .brand-fallback {
                width: 36px;
                height: 36px;
            }

            .hero-description {
                font-size: 16px;
            }

            .callback-card {
                padding: 38px 22px;
            }
        }
    </style>
`;

const logo = LOGO_URL
    ? `
        <img
            class="brand-logo"
            src="${LOGO_URL}"
            alt="Logo de DEVGRU"
        >
    `
    : `
        <span class="brand-fallback">DG</span>
    `;

const navbar = `
    <nav class="navbar">
        <div class="nav-inner">

            <a class="brand" href="/">
                ${logo}
                <span class="brand-name">DEVGRU</span>
            </a>

            <div class="nav-links">

                <!-- Privacy Policy -->
                <a
                    class="nav-icon"
                    href="/privacy"
                    aria-label="Política de Privacidad"
                    title="Política de Privacidad"
                >
                    <svg viewBox="0 0 24 24">
                        <rect x="5" y="3" width="14" height="18" rx="2"></rect>
                        <path d="M9 8h6"></path>
                        <path d="M9 12h6"></path>
                        <path d="M9 16h4"></path>
                    </svg>
                </a>

                <!-- Terms of Service -->
                <a
                    class="nav-icon"
                    href="/terms"
                    aria-label="Términos de Servicio"
                    title="Términos de Servicio"
                >
                    <svg viewBox="0 0 24 24">
                        <path d="M6 3h9l3 3v15H6z"></path>
                        <path d="M14 3v4h4"></path>
                        <path d="M9 12h6"></path>
                        <path d="M9 16h6"></path>
                    </svg>
                </a>

            </div>
        </div>
    </nav>
`;

const footer = `
    <footer>
        <div class="footer-inner">

            <span>
                © ${new Date().getFullYear()}
                DEVGRU. Todos los derechos reservados.
            </span>

            <div class="footer-links">
                <a href="/privacy">Privacidad</a>
                <a href="/terms">Términos</a>
            </div>

        </div>
    </footer>
`;

const page = (title, content) => `
    <!DOCTYPE html>

    <html lang="es">

    <head>
        <meta charset="UTF-8">

        <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
        >

        <meta
            name="description"
            content="DEVGRU - Aplicación oficial de DEVGRU."
        >

        <title>${title}</title>

        ${styles}
    </head>

    <body>

        ${navbar}

        ${content}

        ${footer}

    </body>

    </html>
`;

app.get("/", (_req, res) => {
    res.send(
        page(
            "DEVGRU",
            `
                <main class="hero">

                    <div class="container">

                        <div class="hero-content">

                            <div class="badge">
                                <span class="badge-dot"></span>
                                DEVGRU Application
                            </div>

                            <h1>DEVGRU</h1>

                            <p class="hero-description">
                                Aplicación oficial de DEVGRU para servicios
                                de autenticación e integración con Roblox.
                            </p>

                            <section class="info-section">

                                <div class="info-card">

                                    <img
                                        class="info-image"
                                        src="${INFO_IMAGE_URL}"
                                        alt="DEVGRU"
                                    >

                                    <div class="info-content">

                                        <div class="info-label">
                                            Información
                                        </div>

                                        <h2>
                                            Página Web Oficial de DEVGRU
                                        </h2>

                                        <p>
                                            Este sitio constituye la página
                                            web oficial de DEVGRU y sirve como
                                            punto de acceso a los servicios y
                                            herramientas oficiales de la
                                            organización.
                                        </p>

                                        <br>

                                        <p>
                                            Algunos servicios de DEVGRU pueden
                                            utilizar sistemas de autenticación
                                            e integraciones con plataformas
                                            externas para proporcionar
                                            funcionalidades adicionales a sus
                                            usuarios.
                                        </p>

                                    </div>

                                </div>

                                <div class="info-points">

                                    <div class="info-point">

                                        <div class="info-point-icon">
                                            <svg viewBox="0 0 24 24">
                                                <path d="M12 3l7 4v5c0 4.5-3 7.8-7 9-4-1.2-7-4.5-7-9V7z"></path>
                                                <path d="M9 12l2 2 4-4"></path>
                                            </svg>
                                        </div>

                                        <div>
                                            <strong>
                                                Servicios oficiales
                                            </strong>

                                            <span>
                                                Plataforma administrada por
                                                DEVGRU.
                                            </span>
                                        </div>

                                    </div>

                                    <div class="info-point">

                                        <div class="info-point-icon">
                                            <svg viewBox="0 0 24 24">
                                                <circle cx="12" cy="12" r="8"></circle>
                                                <path d="M12 8v4l3 2"></path>
                                            </svg>
                                        </div>

                                        <div>
                                            <strong>
                                                Disponible en línea
                                            </strong>

                                            <span>
                                                Acceso mediante una conexión
                                                segura HTTPS.
                                            </span>
                                        </div>

                                    </div>

                                    <div class="info-point">

                                        <div class="info-point-icon">
                                            <svg viewBox="0 0 24 24">
                                                <circle cx="12" cy="8" r="3"></circle>
                                                <path d="M5 21c.7-4 3-6 7-6s6.3 2 7 6"></path>
                                            </svg>
                                        </div>

                                        <div>
                                            <strong>
                                                Autenticación
                                            </strong>

                                            <span>
                                                Preparado para integraciones
                                                con servicios externos.
                                            </span>
                                        </div>

                                    </div>

                                </div>

                            </section>

                        </div>

                    </div>

                </main>
            `
        )
    );
});

app.get("/roblox/callback", (_req, res) => {
    res.send(
        page(
            "Solicitud recibida - DEVGRU",
            `
                <main class="callback">

                    <div class="container">

                        <div class="callback-card">

                            <div class="success-icon">
                                ✓
                            </div>

                            <h1>
                                Solicitud recibida
                            </h1>

                            <p>
                                La solicitud de autorización de DEVGRU
                                fue recibida correctamente.
                            </p>

                            <div class="callback-note">
                                Esta página forma parte del sistema de
                                autenticación de DEVGRU.
                            </div>

                        </div>

                    </div>

                </main>
            `
        )
    );
});

app.get("/privacy", (_req, res) => {
    res.send(
        page(
            "Política de Privacidad - DEVGRU",
            `
                <main class="page">

                    <div class="container">

                        <div class="legal-header">

                            <div class="badge">
                                <span class="badge-dot"></span>
                                Legal
                            </div>

                            <h1>
                                Política de Privacidad
                            </h1>

                            <p>
                                Información sobre el tratamiento de datos
                                utilizado por los servicios de DEVGRU.
                            </p>

                        </div>

                        <article class="legal-content">

                            <h2>
                                1. Información general
                            </h2>

                            <p>
                                DEVGRU utiliza servicios de autenticación
                                compatibles con Roblox OAuth para permitir
                                futuras funciones de autenticación e
                                integración dentro de los servicios de DEVGRU.
                            </p>

                            <h2>
                                2. Información recopilada
                            </h2>

                            <p>
                                Cuando una función de autenticación se
                                encuentre disponible, el servicio podrá
                                recibir información básica proporcionada
                                por Roblox, como el identificador de usuario
                                y nombre de usuario.
                            </p>

                            <h2>
                                3. Uso de la información
                            </h2>

                            <p>
                                La información recibida se utilizará
                                únicamente para proporcionar y administrar
                                las funciones de DEVGRU que requieran
                                autenticación.
                            </p>

                            <h2>
                                4. Almacenamiento
                            </h2>

                            <p>
                                Los datos necesarios para proporcionar las
                                funciones del servicio podrán almacenarse
                                durante el tiempo necesario para cumplir
                                con su finalidad.
                            </p>

                            <h2>
                                5. Seguridad
                            </h2>

                            <p>
                                DEVGRU aplica medidas razonables para
                                proteger la información utilizada por sus
                                servicios contra accesos no autorizados,
                                pérdida o uso indebido.
                            </p>

                            <h2>
                                6. Servicios de terceros
                            </h2>

                            <p>
                                Algunas funciones pueden depender de
                                servicios externos, incluyendo Roblox.
                                El tratamiento de información por dichos
                                servicios está sujeto a sus propias
                                políticas y términos.
                            </p>

                            <h2>
                                7. Contacto
                            </h2>

                            <p>
                                Para cualquier consulta relacionada con
                                privacidad, puedes contactar con la
                                administración de DEVGRU.
                            </p>

                        </article>

                    </div>

                </main>
            `
        )
    );
});

app.get("/terms", (_req, res) => {
    res.send(
        page(
            "Términos de Servicio - DEVGRU",
            `
                <main class="page">

                    <div class="container">

                        <div class="legal-header">

                            <div class="badge">
                                <span class="badge-dot"></span>
                                Legal
                            </div>

                            <h1>
                                Términos de Servicio
                            </h1>

                            <p>
                                Condiciones aplicables al uso de los
                                servicios de DEVGRU.
                            </p>

                        </div>

                        <article class="legal-content">

                            <h2>
                                1. Aceptación
                            </h2>

                            <p>
                                Al acceder o utilizar los servicios de
                                DEVGRU, aceptas estos Términos de Servicio.
                                Si no estás de acuerdo con ellos, debes
                                dejar de utilizar el servicio.
                            </p>

                            <h2>
                                2. Uso del servicio
                            </h2>

                            <p>
                                Los servicios de DEVGRU proporcionan
                                herramientas e integraciones destinadas
                                a los miembros y usuarios de la comunidad
                                DEVGRU.
                            </p>

                            <h2>
                                3. Cuentas
                            </h2>

                            <p>
                                El usuario es responsable de mantener el
                                control y la seguridad de las cuentas que
                                utilice con los servicios de DEVGRU.
                            </p>

                            <h2>
                                4. Servicios de terceros
                            </h2>

                            <p>
                                Algunas funciones pueden utilizar servicios
                                externos, incluyendo Roblox. El uso de
                                dichos servicios también está sujeto a sus
                                respectivos términos y políticas.
                            </p>

                            <h2>
                                5. Disponibilidad
                            </h2>

                            <p>
                                DEVGRU puede modificar, suspender o retirar
                                cualquier función del servicio en cualquier
                                momento.
                            </p>

                            <h2>
                                6. Uso indebido
                            </h2>

                            <p>
                                No está permitido utilizar los servicios de
                                DEVGRU para actividades fraudulentas,
                                maliciosas o que interfieran con el
                                funcionamiento del servicio.
                            </p>

                            <h2>
                                7. Contacto
                            </h2>

                            <p>
                                Para cualquier consulta relacionada con
                                estos términos, puedes contactar con la
                                administración de DEVGRU.
                            </p>

                        </article>

                    </div>

                </main>
            `
        )
    );
});

app.use((_req, res) => {
    res.status(404).send(
        page(
            "404 - DEVGRU",
            `
                <main class="callback">

                    <div class="container">

                        <div class="callback-card">

                            <div class="success-icon">
                                ?
                            </div>

                            <h1>
                                Página no encontrada
                            </h1>

                            <p>
                                La página que estás buscando no existe
                                o ya no está disponible.
                            </p>

                            <div class="actions">

                                <a
                                    class="button button-primary"
                                    href="/"
                                >
                                    Volver a DEVGRU
                                </a>

                            </div>

                        </div>

                    </div>

                </main>
            `
        )
    );
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(
        `DEVGRU Web escuchando en el puerto ${PORT}`
    );
});
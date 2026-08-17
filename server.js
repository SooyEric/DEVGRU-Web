import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

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

        .brand-mark {
            width: 38px;
            height: 38px;
            border: 1px solid rgba(255, 175, 26, 0.35);
            border-radius: 10px;
            display: grid;
            place-items: center;
            background: rgba(255, 175, 26, 0.08);
            color: var(--accent);
            font-size: 14px;
            font-weight: 900;
        }

        .nav-links {
            display: flex;
            align-items: center;
            gap: 24px;
            color: var(--muted);
            font-size: 14px;
        }

        .nav-links a {
            transition: color 0.2s ease;
        }

        .nav-links a:hover {
            color: var(--text);
        }

        .container {
            width: min(1000px, calc(100% - 40px));
            margin: 0 auto;
        }

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
            box-shadow: 0 0 12px rgba(255, 175, 26, 0.65);
        }

        h1 {
            font-size: clamp(42px, 8vw, 78px);
            line-height: 0.98;
            letter-spacing: -0.045em;
            font-weight: 900;
            margin-bottom: 22px;
        }

        .hero-description {
            max-width: 620px;
            margin: 0 auto;
            color: var(--muted);
            font-size: 18px;
            line-height: 1.7;
        }

        .actions {
            margin-top: 36px;
            display: flex;
            justify-content: center;
            gap: 12px;
            flex-wrap: wrap;
        }

        .button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-height: 48px;
            padding: 0 22px;
            border-radius: 10px;
            border: 1px solid var(--border);
            font-size: 14px;
            font-weight: 700;
            transition:
                transform 0.2s ease,
                background 0.2s ease,
                border-color 0.2s ease;
        }

        .button:hover {
            transform: translateY(-1px);
        }

        .button-primary {
            background: var(--accent);
            color: #111;
            border-color: var(--accent);
        }

        .button-primary:hover {
            background: var(--accent-hover);
            border-color: var(--accent-hover);
        }

        .button-secondary {
            background: var(--surface);
            color: var(--text);
        }

        .button-secondary:hover {
            background: var(--surface-light);
            border-color: rgba(255, 255, 255, 0.14);
        }

        .cards {
            margin-top: 70px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 14px;
            text-align: left;
        }

        .card {
            background: rgba(16, 19, 24, 0.78);
            border: 1px solid var(--border);
            border-radius: 14px;
            padding: 24px;
        }

        .card-icon {
            width: 38px;
            height: 38px;
            border-radius: 9px;
            display: grid;
            place-items: center;
            margin-bottom: 18px;
            background: rgba(255, 175, 26, 0.08);
            color: var(--accent);
            font-weight: 800;
        }

        .card h2 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        .card p {
            color: var(--muted);
            font-size: 14px;
        }

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

        .legal-content ul {
            color: #c4c8cf;
            padding-left: 22px;
            margin-bottom: 14px;
        }

        .legal-content li {
            margin-bottom: 7px;
        }

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
            box-shadow: 0 24px 80px rgba(0, 0, 0, 0.35);
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

        @media (max-width: 760px) {
            .nav-inner {
                min-height: 64px;
            }

            .nav-links {
                gap: 12px;
                font-size: 12px;
            }

            .hero {
                min-height: auto;
                padding: 80px 0;
            }

            .cards {
                grid-template-columns: 1fr;
                margin-top: 50px;
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

            .nav-links a:nth-child(1) {
                display: none;
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

const navbar = `
    <nav class="navbar">
        <div class="nav-inner">
            <a class="brand" href="/">
                <span class="brand-mark">DG</span>
                <span>DEVGRU</span>
            </a>

            <div class="nav-links">
                <a href="/">Inicio</a>
                <a href="/privacy">Privacidad</a>
                <a href="/terms">Términos</a>
            </div>
        </div>
    </nav>
`;

const footer = `
    <footer>
        <div class="footer-inner">
            <span>© ${new Date().getFullYear()} DEVGRU. Todos los derechos reservados.</span>

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
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="DEVGRU - Aplicación oficial de DEVGRU.">
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

                            <div class="actions">
                                <a class="button button-primary" href="/roblox/callback">
                                    Continuar
                                </a>

                                <a class="button button-secondary" href="/privacy">
                                    Política de Privacidad
                                </a>
                            </div>

                            <div class="cards">

                                <div class="card">
                                    <div class="card-icon">R</div>
                                    <h2>Roblox</h2>
                                    <p>
                                        Integración con los servicios de
                                        autenticación de Roblox.
                                    </p>
                                </div>

                                <div class="card">
                                    <div class="card-icon">S</div>
                                    <h2>Seguro</h2>
                                    <p>
                                        Diseñado para proporcionar una
                                        experiencia de autenticación segura
                                        y transparente.
                                    </p>
                                </div>

                                <div class="card">
                                    <div class="card-icon">D</div>
                                    <h2>DEVGRU</h2>
                                    <p>
                                        Servicios oficiales de la comunidad
                                        DEVGRU.
                                    </p>
                                </div>

                            </div>
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

                            <div class="success-icon">✓</div>

                            <h1>Solicitud recibida</h1>

                            <p>
                                La solicitud de autorización de DEVGRU
                                fue recibida correctamente.
                            </p>

                            <div class="callback-note">
                                Esta página confirma que el servicio de
                                DEVGRU está disponible para recibir
                                solicitudes de autenticación.
                            </div>

                            <div class="actions">
                                <a class="button button-primary" href="/">
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

                            <h1>Política de Privacidad</h1>

                            <p>
                                Información sobre el tratamiento de datos
                                utilizado por los servicios de DEVGRU.
                            </p>
                        </div>

                        <article class="legal-content">

                            <h2>1. Información general</h2>

                            <p>
                                DEVGRU utiliza servicios de autenticación
                                compatibles con Roblox OAuth para permitir
                                futuras funciones de autenticación e
                                integración dentro de los servicios de DEVGRU.
                            </p>

                            <h2>2. Información recopilada</h2>

                            <p>
                                Cuando una función de autenticación se
                                encuentre disponible, el servicio podrá
                                recibir información básica proporcionada
                                por Roblox, como el identificador de usuario
                                y nombre de usuario.
                            </p>

                            <h2>3. Uso de la información</h2>

                            <p>
                                La información recibida se utilizará
                                únicamente para proporcionar y administrar
                                las funciones de DEVGRU que requieran
                                autenticación.
                            </p>

                            <h2>4. Almacenamiento</h2>

                            <p>
                                Los datos necesarios para proporcionar las
                                funciones del servicio podrán almacenarse
                                durante el tiempo necesario para cumplir
                                con su finalidad.
                            </p>

                            <h2>5. Seguridad</h2>

                            <p>
                                DEVGRU aplica medidas razonables para
                                proteger la información utilizada por sus
                                servicios contra accesos no autorizados,
                                pérdida o uso indebido.
                            </p>

                            <h2>6. Servicios de terceros</h2>

                            <p>
                                Algunas funciones pueden depender de
                                servicios externos, incluyendo Roblox.
                                El tratamiento de información por dichos
                                servicios está sujeto a sus propias
                                políticas y términos.
                            </p>

                            <h2>7. Contacto</h2>

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

                            <h1>Términos de Servicio</h1>

                            <p>
                                Condiciones aplicables al uso de los
                                servicios de DEVGRU.
                            </p>
                        </div>

                        <article class="legal-content">

                            <h2>1. Aceptación</h2>

                            <p>
                                Al acceder o utilizar los servicios de
                                DEVGRU, aceptas estos Términos de Servicio.
                                Si no estás de acuerdo con ellos, debes
                                dejar de utilizar el servicio.
                            </p>

                            <h2>2. Uso del servicio</h2>

                            <p>
                                Los servicios de DEVGRU proporcionan
                                herramientas e integraciones destinadas
                                a los miembros y usuarios de la comunidad
                                DEVGRU.
                            </p>

                            <h2>3. Cuentas</h2>

                            <p>
                                El usuario es responsable de mantener el
                                control y la seguridad de las cuentas que
                                utilice con los servicios de DEVGRU.
                            </p>

                            <h2>4. Servicios de terceros</h2>

                            <p>
                                Algunas funciones pueden utilizar servicios
                                externos, incluyendo Roblox. El uso de
                                dichos servicios también está sujeto a sus
                                respectivos términos y políticas.
                            </p>

                            <h2>5. Disponibilidad</h2>

                            <p>
                                DEVGRU puede modificar, suspender o retirar
                                cualquier función del servicio en cualquier
                                momento.
                            </p>

                            <h2>6. Uso indebido</h2>

                            <p>
                                No está permitido utilizar los servicios de
                                DEVGRU para actividades fraudulentas,
                                maliciosas o que interfieran con el
                                funcionamiento del servicio.
                            </p>

                            <h2>7. Contacto</h2>

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

                            <div class="success-icon">?</div>

                            <h1>Página no encontrada</h1>

                            <p>
                                La página que estás buscando no existe
                                o ya no está disponible.
                            </p>

                            <div class="actions">
                                <a class="button button-primary" href="/">
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
    console.log(`DEVGRU Web escuchando en el puerto ${PORT}`);
});
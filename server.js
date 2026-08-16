import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (_req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>DEVGRU</title>
        </head>
        <body>
            <h1>DEVGRU</h1>
            <p>Aplicación oficial de DEVGRU.</p>

            <p>
                <a href="/privacy">Política de Privacidad</a>
            </p>

            <p>
                <a href="/terms">Términos de Servicio</a>
            </p>
        </body>
        </html>
    `);
});

app.get("/privacy", (_req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Política de Privacidad - DEVGRU</title>
        </head>
        <body>
            <h1>Política de Privacidad</h1>

            <p>
                DEVGRU utiliza la autenticación de Roblox OAuth para permitir
                que los usuarios vinculen su cuenta de Roblox con su cuenta
                de Discord.
            </p>

            <h2>Información recopilada</h2>

            <p>
                Al utilizar la autenticación, podemos recibir información
                básica de la cuenta de Roblox, incluyendo el identificador
                de usuario y nombre de usuario.
            </p>

            <h2>Uso de la información</h2>

            <p>
                Esta información se utiliza exclusivamente para verificar
                y asociar una cuenta de Roblox con una cuenta de Discord
                dentro de los servicios de DEVGRU.
            </p>

            <h2>Almacenamiento</h2>

            <p>
                La información necesaria para mantener la vinculación puede
                almacenarse mientras la cuenta permanezca vinculada.
            </p>

            <h2>Contacto</h2>

            <p>
                Para cualquier consulta relacionada con privacidad,
                puedes contactar con la administración de DEVGRU.
            </p>
        </body>
        </html>
    `);
});

app.get("/terms", (_req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Términos de Servicio - DEVGRU</title>
        </head>
        <body>
            <h1>Términos de Servicio</h1>

            <p>
                Al utilizar los servicios de DEVGRU, aceptas estos
                términos de servicio.
            </p>

            <h2>Uso del servicio</h2>

            <p>
                El servicio permite vincular una cuenta de Roblox con una
                cuenta de Discord mediante Roblox OAuth.
            </p>

            <h2>Información de la cuenta</h2>

            <p>
                El usuario debe utilizar únicamente cuentas de Roblox
                sobre las que tenga autorización para realizar la
                vinculación.
            </p>

            <h2>Disponibilidad</h2>

            <p>
                DEVGRU puede modificar, suspender o retirar cualquier
                función del servicio en cualquier momento.
            </p>

            <h2>Contacto</h2>

            <p>
                Para cualquier consulta relacionada con estos términos,
                puedes contactar con la administración de DEVGRU.
            </p>
        </body>
        </html>
    `);
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`DEVGRU Web escuchando en el puerto ${PORT}`);
});
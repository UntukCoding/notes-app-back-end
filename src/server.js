import hapi from "@hapi/hapi"
import {routes} from "./routes.js";

const init =async () => {
    const server=hapi.server({
        port:5000,
        host:process.env.NODE_ENV !=='production'?'localhost':'0.0.0.0',
        routes:{
            cors:{
                origin: ["*"], // an array of origins or 'ignore'
                headers: ["Accept","Content-Type"], // an array of strings - 'Access-Control-Allow-Headers'
                additionalHeaders:["X-Requested-With"]
            }
        }
    })
    await server.start();
    server.route(routes)
    console.log(`server berjalan pada ${server.info.uri}`)
}

init();
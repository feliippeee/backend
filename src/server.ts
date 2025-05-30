import Fastify from "fastify";
import cors from "@fastify/cors";
import { routes } from "./routes";

const app = Fastify({ logger: true });

app.setErrorHandler((error, request, reply) => {
    reply.status(400).send({ error: error.message })
});

const start = async () => {
    await app.register(cors, {
        origin: '*', // or true to allow all
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      }); 
    await app.register(routes)
    try{
        await app.listen({ 
            port: process.env.PORT ? Number(process.env.PORT) : 3333,
        })
    }catch (err) {
        process.exit(1)
    }
}

start();
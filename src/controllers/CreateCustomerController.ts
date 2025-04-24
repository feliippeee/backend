import { FastifyRequest, FastifyReply } from "fastify"
import { CreateCustomerService } from "../services/CreateCustomerService";

class CreateCustomerController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { name, email } = request.body as { name: string; email: string };
       
        const customerService = new CreateCustomerService() // Replace with actual customer creation logic
        const customer = await customerService.execute({name, email}); // Replace with actual customer creation logic
        reply.send(customer);
    }
}

export { CreateCustomerController }
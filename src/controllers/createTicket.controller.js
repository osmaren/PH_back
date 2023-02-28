import { CreateTicketService } from '../services';

class CreateTicketController {
  static async create(req, res, next) {
    try {
      const { unit, quantity, price, duration } = req.body;
      const ticket = await CreateTicketService.createTicket({ unit, quantity, price, duration });
      res.status(201).json(ticket);
    } catch (error) {
      next(error);
    }
  }
}

export default CreateTicketController;

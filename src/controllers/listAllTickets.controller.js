import { ListAllTicketsService } from '../services/';

class ListAllTicketsController {
  static async index(req, res, next) {
    try {
      const tickets = await ListAllTicketsService.getAllTickets();
      res.json(tickets);
    } catch (error) {
      next(error);
    }
  }
}

export default ListAllTicketsController;

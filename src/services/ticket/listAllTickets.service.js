import Ticket from '../../models/ticketModel';

class ListAllTicketsService {
    static async getAllTickets() {
        const tickets = await Ticket.findAll();
        return tickets;
    }
}

export default ListAllTicketsService;
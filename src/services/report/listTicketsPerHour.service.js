import Ticket from '../../models/ticketModel';

class ListTicketsPerHourService {
    static async getTicketsPerHour(start, end) {
        const startDate = start ? new Date(start) : new Date();
        const endDate = end ? new Date(end) : new Date();

        startDate.setHours(0, 0, 0);
        endDate.setHours(23, 59, 59);

        const tickets = await Ticket.findTicketsPerHour(startDate, endDate);

        return tickets;
    }
}

export default ListTicketsPerHourService;
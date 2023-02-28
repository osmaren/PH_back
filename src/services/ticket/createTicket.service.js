import Ticket from '../../models/ticketModel';

class CreateTicketService {
	static async createTicket({ unit, quantity, price, duration }) {
		duration = parseInt(duration);
		quantity = parseInt(quantity);

		if (!price) {
			price = duration === 2 ? 89 * quantity : 109 * quantity;
		}

		const ticket = await Ticket.create({ unit, quantity, price, duration });
		return ticket;
	}
}

export default CreateTicketService;
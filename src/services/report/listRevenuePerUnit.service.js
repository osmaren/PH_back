import Ticket from '../../models/ticketModel';

class ListRevenuePerUnitService {
	static async getRevenuePerUnit(start, end) {
		const startDate = start ? new Date(start) : new Date();
		const endDate = end ? new Date(end) : new Date();
		startDate.setHours(0, 0, 0);
		endDate.setHours(23, 59, 59);

		const revenue = await Ticket.findRevenuePerUnit(startDate, endDate);

		return revenue;
	}
}

export default ListRevenuePerUnitService;
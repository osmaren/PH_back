import Ticket from '../../models/ticketModel';

class ListPeoplePerUnitService {
	static async getPeoplePerUnit(start, end) {
		const startDate = start ? new Date(start) : new Date();
		const endDate = end ? new Date(end) : new Date();

		startDate.setHours(0, 0, 0);
		endDate.setHours(23, 59, 59);

		const people = await Ticket.findPeoplePerUnit(startDate, endDate);

		const result = people.reduce((acc, curr) => {
			const unitIndex = acc.findIndex(obj => obj.unit === curr.unit);
			if (unitIndex === -1) {
				acc.push(curr);
			} else {
				acc[unitIndex].quantity += curr.quantity;
			}
			return acc;
		}, []);

		return result;
	}
}

export default ListPeoplePerUnitService;
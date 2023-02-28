import { ListTicketsPerHourService } from '../services';

class ListTicketsPerHourController {
	static async list(req, res, next) {
		try {
			const { start, end } = req.body;
			const revenue = await ListTicketsPerHourService.getTicketsPerHour(start, end);
			res.json(revenue);
		} catch (error) {
			next(error);
		}
	}
}

export default ListTicketsPerHourController;
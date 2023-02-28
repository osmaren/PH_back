import { ListRevenuePerUnitService } from '../services';

class ListRevenuePerUnitController {
	static async list(req, res, next) {
		try {
			const { start, end } = req.body;
			const revenue = await ListRevenuePerUnitService.getRevenuePerUnit(start, end);
			res.json(revenue);
		} catch (error) {
			next(error);
		}
	}
}

export default ListRevenuePerUnitController;
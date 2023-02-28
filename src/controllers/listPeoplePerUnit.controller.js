import { ListPeoplePerUnitService } from '../services';

class ListPeoplePerUnitController {
	static async list(req, res, next) {
		try {
			const { start, end } = req.body;
			const people = await ListPeoplePerUnitService.getPeoplePerUnit(start, end);
			res.json(people);
		} catch (error) {
			next(error);
		}
	}
}

export default ListPeoplePerUnitController;
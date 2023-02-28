import { ErrorHandler } from "../utils/error";

export const validateCreateTicket = (req, res, next) => {
	const data = req.body;
	const requiredKeys = ["unit", "quantity", "duration"];

	const missingKeys = [];
	for (let i = 0; i < requiredKeys.length; i++) {
		if (Object.keys(data).includes(requiredKeys[i]) == false) {
			missingKeys.push(requiredKeys[i]);
		}
	}

	if (missingKeys.length > 0) {
		next(
			new ErrorHandler(
				400,
				"As chaves: [" + missingKeys.join(", ") + "] são necessárias."
			)
		);
	}

	let { duration } = data;
	duration = parseInt(duration);
	if (duration < 2 || duration > 3) {
		next(
			new ErrorHandler(
				400,
				"Duração do ingresso inválido"
			)
		);
	}

	const now = new Date();
	const clone = new Date(now);
	const opening_time = new Date(clone.setHours(13, 0, 0));
	const closing_time = new Date(clone.setHours(20, 0, 0));
	// if (now < opening_time || now > closing_time) {
	// 	next(
	// 		new ErrorHandler(
	// 			400,
	// 			"Fora do horário de funcionamento."
	// 		)
	// 	);
	// }

	next();
};
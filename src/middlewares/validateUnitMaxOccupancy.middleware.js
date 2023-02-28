import knex from "../database";
import { ErrorHandler } from "../utils/error";

export const validateUnitMaxOccupancy = (req, res, next) => {
  const { unit, duration, quantity } = req.body;
  const start_time = new Date();
  const end_time = new Date(start_time.getTime() + duration * 60 * 60 * 1000);

  knex('tickets')
    .count()
    .where('unit', '=', unit)
    .whereBetween('created_at', [start_time, end_time])
    .orWhereRaw(`DATE_TRUNC('hour', created_at) + INTERVAL '${duration} hour' BETWEEN ? AND ?`, [start_time, end_time])
    .sum('quantity as total')
    .then((result) => {
      const count = result[0].count;
      let total = result[0].total;
      if ((parseInt(total) + parseInt(quantity)) > 100) {
        const err = new ErrorHandler(
          403,
          `Capacidade será excedida!`
        );
        next(err);
      } else {
        next();
      }
    })
    .catch((error) => {
      console.log(error);
      const err = new ErrorHandler(
        500,
        "Ocorreu um erro ao verificar a capacidade."
      );
    });
};


import { Router } from "express";

import { CreateTicketController } from "../controllers";
import { ListAllTicketsController } from "../controllers";
import { ListPeoplePerUnitController } from "../controllers";
import { ListRevenuePerUnitController } from "../controllers";
import { ListTicketsPerHourController } from "../controllers";

import { validateCreateTicket } from "../middlewares/validateCreateTicket.middleware";
import { validateUnitMaxOccupancy } from "../middlewares/validateUnitMaxOccupancy.middleware";

const router = Router();

export const ticketRoute = (app) => {
  router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:5173");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
  });
  router.get("", ListAllTicketsController.index);
  router.post("", validateCreateTicket, validateUnitMaxOccupancy, CreateTicketController.create);
  router.get("/people", ListPeoplePerUnitController.list);
  router.get("/revenue", ListRevenuePerUnitController.list);
  router.get("/hour", ListTicketsPerHourController.list);
  app.use("/ticket", router);
};

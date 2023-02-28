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
  router.get("", ListAllTicketsController.index);
  router.post("", validateCreateTicket, validateUnitMaxOccupancy, CreateTicketController.create);
  router.get("/people", ListPeoplePerUnitController.list);
  router.get("/revenue", ListRevenuePerUnitController.list);
  router.get("/hour", ListTicketsPerHourController.list);
  app.use("/ticket", router);
};

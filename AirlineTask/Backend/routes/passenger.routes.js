import { Router } from "express";
import { auth } from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { passengerSchema } from "../schemas/passenger.schema.js";
import { createPassenger } from "../controller/passenger.controller.js";


const router = Router();

router.post("/register",validateSchema(passengerSchema),createPassenger);


export default router;
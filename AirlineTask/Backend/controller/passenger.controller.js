//controladora
import { sendError } from "../utils/response.util.js";
import { passenger_register,validatePassengerData } from "../logic/passenger/passenger.logic.js";


export const createPassenger = async (req, res) => {
    const validation = validatePassengerData(req);
    if (validation !== true) {
        return sendError(res, "Errores de validación", 400, validation);
    }
    try {
        passenger_register(req,res);
    } catch (error) {
        return sendError(res, error.message || "Error al crear pasajero", 400);
    }
};

//controladora
import { sendError } from "../utils/response.util.js";
import { passenger_register,passenger_delete,validatePassengerData } from "../logic/passenger/passenger.logic.js";


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

export const deletePassenger = async (req, res) => {
    try {
        passenger_delete(req,res);
    } catch (error) {
        return sendError(res, error.message || "Error al eliminar pasajero", 400);
    }
};

export const getAllPassenger = async (req, res) => {
    try {
       //metodo de mostrar todos los pasajeros
    } catch (error) {
        return sendError(res, error.message || "Error al mostrar pasajero", 400);
    }
};

export const updatePassenger = async (req, res) => {
    try {
       //metodo de actualizar los pasajeros
    } catch (error) {
        return sendError(res, error.message || "Error al actualizar pasajero", 400);
    }
};


export const getSearchPaasenger = async (req, res) => {
    try {
       //metodo de filtrar los pasajeros
    } catch (error) {
        return sendError(res, error.message || "Error al mostrar pasajero", 400);
    }
};


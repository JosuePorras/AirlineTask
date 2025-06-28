//proceso de logica para pasajeros
import Passenger from "../../model/passenger.model.js";
import { validateForm } from "../validateField.logic.js";
import { sendError, sendSuccess } from "../../utils/response.util.js";
import { passengerService } from "../../service/passenger/passenger.service.js";

export const validatePassengerData = (req) => {
    return validateForm(req.body, [
        { name: 'DSC_PASSPORT', label: 'Pasaporte' },
        { name: 'DSC_NAME', label: 'Nombre' },
        { name: 'DSC_SEC_NAME', label: 'Segundo nombre' },
        { name: 'DSC_BIRTHDAY', label: 'Fecha de nacimiento' },
        { name: 'DSC_EMAIL', label: 'Correo', type: 'field' },
        { name: 'DSC_PHONE_NUMBER', label: 'Teléfono' }
    ]);
};


export const validatePassengerEmail= async (DSC_EMAIL) => {
    try {
        const output = await existEmailData(DSC_EMAIL);
        return (output !== false) ? output : true;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const validatePassengerPhoneNumber= async (phone) => {
    try {
        const output = await existPhoneData(phone);
        return (output !== false) ? output : true;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const validatePassengerPassport= async (passport) => {
    try {
        const output = await existPassportData(passport);
        return (output !== false) ? output : true;
    } catch (error) {
        throw new Error(error.message);
    }
};

async function existEmailData(email) {
    if (await existEmail(email))
        return ["El correo proporcionado se encuentra registrado en el sistema."];


    return false;
}

const existPhoneData = async (phone) =>(await consultPassengerData("DSC_PHONE_NUMBER", phone))
    ? ["El número de teléfono ya está registrado."]
    : false;

const existPassportData = async (passport) =>(await consultPassengerData("DSC_PASSPORT", passport))
    ? ["El pasaporte proporcionado ya está registrado."]
    : false;
      
async function existEmail(email) {
    return !!(await Passenger.findOne({ where: { DSC_EMAIL: email.toLowerCase() } }));
}

/*
async function existPhoneNumber(phonesNumber) {
    return !!(await Passenger.findOne({ where: { DSC_PHONE_NUMBER: phonesNumber} }));
}

async function existPassport(passport) {
    return !!(await Passenger.findOne({ where: { DSC_PASSPORT: passport} }));
}*/

async function consultPassengerData(label,data) {
    return !!(await Passenger.findOne({ where: { [label]: data} }));
}



export const passenger_register = async (req,res) => {
    try {
        const { DSC_PASSPORT, DSC_NAME,DSC_SEC_NAME,DSC_BIRTHDAY,DSC_EMAIL,DSC_PHONE_NUMBER } = req.body;

        const output = await validatePassengerEmail(DSC_EMAIL);
        if (output !== true) return sendError(res,output , 400);
        
        const phoneNumber = await validatePassengerPhoneNumber(DSC_PHONE_NUMBER);
        if (phoneNumber !== true) return sendError(res,phoneNumber , 400);
        
        const passportMessage = await validatePassengerPassport(DSC_PASSPORT);
        if (passportMessage !== true) return sendError(res,passportMessage , 400);
        
        const newPaasenger = {
            DSC_PASSPORT,
            DSC_NAME,
            DSC_SEC_NAME,
            DSC_BIRTHDAY,
            DSC_EMAIL: DSC_EMAIL.toLowerCase(),
            DSC_PHONE_NUMBER
        };

        const result= await passengerService.createPassenger(newPaasenger);

        return (result.code === 201) ? sendSuccess(res,result.message,null,result.code):sendError(res,result.message,result.code);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const passenger_delete = async (req,res) => {
    try {
        const ID_PASSENGER= req.params.id;

        if (!ID_PASSENGER) return sendError(res, "Pasaporte del pasajero es requerido.", 400);

        const result= await passengerService.deletePassenger(ID_PASSENGER);

        return result.code === 200
        ? sendSuccess(res, result.message, null, result.code)
        : sendError(res, result.message, result.code);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
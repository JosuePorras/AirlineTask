import Passenger from "../../model/passenger.model.js";



export const passengerService = {
    async createPassenger(data) {
      try {
      
        const passenger = await Passenger.create({
          DSC_PASSPORT: data.DSC_PASSPORT,
          DSC_NAME: data.DSC_NAME,
          DSC_SEC_NAME: data.DSC_SEC_NAME,
          DSC_BIRTHDAY: data.DSC_BIRTHDAY,
          DSC_EMAIL: data.DSC_EMAIL,
          DSC_PHONE_NUMBER: data.DSC_PHONE_NUMBER,
        });
        return { code: 201, message: `Se ha ingresado el pasajero: ${passenger.DSC_NAME} correctamente.` };
      } catch (error) {
        console.error("Error en createPassenger:", error);
       return { code: 400, message: "Error inesperado al crear pasajero" };
      }
    },
  };
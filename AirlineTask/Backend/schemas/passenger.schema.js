import { z } from "zod";

export const passengerSchema = z.object({
  DSC_PASSPORT: z
    .string({
      required_error: "El número de pasaporte es obligatorio.",
    })
    .min(6, {
      message: "El número de pasaporte debe tener al menos 6 caracteres.",
    })
    .max(255, {
      message: "El número de pasaporte no puede tener más de 255 caracteres.",
    }),

  DSC_NAME: z
    .string({
      required_error: "El nombre del pasajero es obligatorio.",
    })
    .min(2, { message: "El nombre debe tener al menos 2 caracteres." })
    .max(255, { message: "El nombre no puede tener más de 255 caracteres." }),

  DSC_SEC_NAME: z
    .string({
        required_error: "El apellido del pasajero es obligatorio.",
    }
    )
    .min(2, { message: "El apellido debe tener al menos 2 caracteres." })
    .max(255, { message: "El apellido no puede tener más de 255 caracteres." })
    .optional(),

  DSC_BIRTHDAY: z
    .string({
      required_error: "La fecha de nacimiento es obligatoria.",
    })
    .refine(val => !isNaN(Date.parse(val)), {
      message: "La fecha de nacimiento no tiene un formato válido (YYYY-MM-DD).",
    }),

  DSC_EMAIL: z
    .string()
    .email("El correo electrónico no tiene un formato válido.")
    .max(255, { message: "El correo no puede tener más de 255 caracteres." }),

  DSC_PHONE_NUMBER: z
    .string()
    .min(7, { message: "El numero de telefono debe poseer al menos 8 digitos." })
    .max(255, { message: "El número de teléfono no puede tener más de 255 caracteres." })
});

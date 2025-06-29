import { validateForm } from "../validateField.logic.js";
import { sendError, sendSuccess } from "../../utils/response.util.js";


export const validateUserData = (req) => {
    return validateForm(req.body, [
        { name: 'DSC_USERNAME', label: 'Nombre de usuario' },
        { name: 'DSC_PASSWORD', label: 'Contraseña' },
        { name: 'ID_USERTYPE', label: 'Tipo de usuario' },
        { name: 'ID_STATUS', label: 'Estado' }
    ]);
};
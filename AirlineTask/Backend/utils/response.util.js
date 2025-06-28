
export const sendResponse = (res, code, message, data = null) => {
    const response = {
        code,
        message:message,
    };

    if (data !== null) {
        response.data = data;
    }

    return res.status(code).json(response);
};

export const sendSuccess = (res, message = "Operación exitosa", data = null, code = 200) => {
    return sendResponse(res, code, message, data);
};

export const sendError = (res, message = "Ocurrió un error", code = 400) => {
    return sendResponse(res, code, message);
};

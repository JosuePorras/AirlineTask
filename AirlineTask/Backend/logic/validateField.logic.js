
function isNotEmpty(value) {
    if (typeof value === 'string') {
        return value.trim().length > 0;
    } else if (typeof value === 'number') {
        return !isNaN(value);
    }
    return false;
}

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

/**
 * @param {object} data 
 * @param {Array} requiredFields 
 */
export const validateForm = (data, requiredFields = []) => {
    const errors = [];

    for (const field of requiredFields) {
        const { name, label, type = 'field', children = [] } = field;
        const value = data[name];

        if (type === 'field') {
            if (!isNotEmpty(value)) {
                errors.push(`El campo ${label} es requerido y no puede estar vacío.`);
            }

        } else if (type === 'array') {
            if (!Array.isArray(value) || value.length === 0) {
                errors.push(`La lista de ${label.toLowerCase()} es requerida y no puede estar vacía.`);
            } else {
                value.forEach((item, index) => {
                    children.forEach(child => {
                        const childValue = item[child.key];
                        const childLabel = `${label} (${index + 1})`;

                        if (!isNotEmpty(childValue)) {
                            errors.push(`El campo ${child.key} en ${childLabel} no puede estar vacío.`);
                        } else if (child.type === 'email' && !isValidEmail(childValue)) {
                            errors.push(`El correo en ${childLabel} no es válido.`);
                        }
                    });
                });
            }
        }
    }

    return errors.length > 0 ? errors : true;
};


/*

[
    { name: 'DSC_DIRECCIONEXACTA', label: 'Dirección exacta' },
    { name: 'DSC_NOMBRE', label: 'Nombre' },
    { name: 'ID_TIPOPROVEEDOR', label: 'Tipo de proveedor' },
    { name: 'ESTADO', label: 'Estado' },
    {
        name: 'phones',
        label: 'Teléfonos',
        type: 'array',
        children: [{ key: 'DSC_TELEFONO' }]
    },
    {
        name: 'emails',
        label: 'Correos',
        type: 'array',
        children: [{ key: 'DSC_CORREO', type: 'email' }]
    }
]

*/
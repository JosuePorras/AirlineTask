import bcrypt from "bcryptjs";

export const encryptData = async (data, salt = 10) => {
    if (typeof data === 'string' && data.trim()) {
      return bcrypt.hash(data, salt);
    }
    throw new Error("Datos no válidos para encriptar.");
  };


  export const compareData = async (data1, data2) => 
    bcrypt.compare(data1, data2).catch(() => false);
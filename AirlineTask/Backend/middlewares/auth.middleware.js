import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const auth = (req, res, next) => {
    const token = req.cookies?.token;
  
    if (!token) {
      return res.status(401).json({ message: "No token, autorización denegada." });
    }
  
    jwt.verify(token, TOKEN_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Token no válido." });
      }
      req.user = decoded;
      next();
    });
  };

  export const authorize = (requiredPermissions = []) => {
    return (req, res, next) => {
      const user = req.user;
  
      if (!user?.permissions || !Array.isArray(user.permissions)) {
        return res.status(403).json({ message: "Acceso denegado." });
      }
  
      const userPermissions = user.permissions.map(p => p.nombre);
      const hasPermission = requiredPermissions.some(p => userPermissions.includes(p));
  
      if (!hasPermission) {
        return res.status(403).json({ message: "Acceso denegado: permiso insuficiente." });
      }
  
      next();
    };
  };
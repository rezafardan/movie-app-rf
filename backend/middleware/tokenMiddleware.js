import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({ path: "../../.env" });

const tokenVerify = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(403).json({ message: "Token tidak tersedia" });
  }

  const tokenParts = authHeader.split(" ");
  if (tokenParts.length !== 2 || tokenParts[0] !== "Bearer") {
    return res.status(403).json({ message: "Format token tidak valid" });
  }

  const token = tokenParts[1];
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res
        .status(401)
        .json({ message: "Token tidak sah atau tidak valid" });
    }

    req.user = decoded;
    next();
  });
};

export default { tokenVerify };

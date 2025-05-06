// middleware/auth.js

export const verifyAdmin = (req, res, next) => {
    // Assuming you have a JWT token that holds user role info
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      return res.status(401).json({ message: "No token, authorization denied." });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      if (decoded.role !== "admin") {
        return res.status(403).json({ message: "Not authorized as admin." });
      }
      req.user = decoded; // Attach decoded user data to the request object
      next();
    } catch (err) {
      res.status(401).json({ message: "Token is not valid." });
    }
  };
  
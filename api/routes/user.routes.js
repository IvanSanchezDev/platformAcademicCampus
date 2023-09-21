import { Router } from "express";
import { isAuthorized } from "../middlewares/auth.js";



export const router = Router();

router.get('/user', isAuthorized, (req, res) => {
    const user = req.app.locals.user;
    res.status(200).json({ data: user });
});
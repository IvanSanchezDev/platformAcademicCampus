import { Router } from "express";
import { isAuthorized } from "../middlewares/auth.js";

export const router = Router();

router.get('/user',(req, res) => {
    res.status(200).json({ user: req.user });
});
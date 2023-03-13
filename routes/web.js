import express from "express";
const router = express.Router();
import LoginControllers from "../controllers/loginControllers.js";


router.get("/", LoginControllers.homepage);
router.get("/registration", LoginControllers.registrationPage);
router.get("/login", LoginControllers.loginPage);


export default router;

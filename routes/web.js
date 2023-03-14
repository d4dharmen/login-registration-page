import express from "express";
const router = express.Router();
import LoginControllers from "../controllers/loginControllers.js";


router.get("/", LoginControllers.homepage);
router.get("/registration", LoginControllers.registrationPage);
router.post("/registration/", LoginControllers.registrationProcess);
router.get("/login", LoginControllers.loginPage);
router.get("/dashboard", LoginControllers.dashboard);


export default router;

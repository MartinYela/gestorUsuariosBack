import express, {Router} from "express";

const router = express.Router();

router.route("/prueba")
    .get(()=> console.log("prueba"));

export default router;
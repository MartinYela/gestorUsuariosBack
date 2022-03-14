import express from "express";
import cors from 'cors';
import userRouterPrueba from './user/user.router.js';
import { validateJWTAuth } from "./auth/auth.middleware.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use(validateJWTAuth);
app.use('/user', userRouterPrueba);

app.listen(3001, () => console.log('Servidor funcionando en puerto 3001'));
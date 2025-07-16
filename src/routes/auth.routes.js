import { Router } from "express";
import usersController from "../controllers/products.controllers.js";

import express from 'express';
import { loginUser } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/login', loginUser);

export default router;


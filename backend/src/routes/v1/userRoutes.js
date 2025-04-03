import express from 'express';
import { createUser } from '../../controllers/userController.js';

const routes = express.Router();
routes.post('/register', createUser);
export default routes;
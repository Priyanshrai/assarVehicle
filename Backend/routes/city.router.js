import express from 'express';
import * as cityController from '../controller/city.controller.js';

var router = express.Router();

router.post("/save",cityController.save);

router.get("/fetch",cityController.fetch);

router.delete("/delete/:id",cityController.deleteUser);

router.patch("/update",cityController.updateUser);

router.post("/login",cityController.login);

export default router;
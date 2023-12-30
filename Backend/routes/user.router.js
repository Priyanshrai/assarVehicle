import express from 'express';
import * as userController from '../controller/user.controller.js';

var router = express.Router();

router.post("/save",userController.save);

router.get("/fetch",userController.fetch);

router.delete("/delete/:id",userController.deleteUser);

router.patch("/update",userController.updateUser);

router.post("/login",userController.login);

export default router;
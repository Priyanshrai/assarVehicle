import express from 'express';
import * as stateController from '../controller/state.controller.js';

var router = express.Router();

router.post("/save",stateController.save);

router.get("/fetch",stateController.fetch);

router.delete("/delete/:id",stateController.deleteUser);

router.patch("/update",stateController.updateUser);

router.post("/login",stateController.login);

export default router;
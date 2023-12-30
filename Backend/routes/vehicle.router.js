import express from 'express';
import * as vehicleController from '../controller/vehicle.controller.js';

var router = express.Router();

router.post("/save",vehicleController.save);

router.get("/fetch",vehicleController.fetch);

router.delete("/delete/:id",vehicleController.deleteDocument);

router.patch("/update",vehicleController.updateDocument);

router.post("/login",vehicleController.login);

export default router;
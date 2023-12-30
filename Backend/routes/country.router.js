import express from 'express';
import * as countryController from '../controller/country.controller.js';

var router = express.Router();

router.post("/save",countryController.save);

router.get("/fetch",countryController.fetch);

router.delete("/delete/:id",countryController.deleteUser);

router.patch("/update",countryController.updateUser);

router.post("/login",countryController.login);

export default router;
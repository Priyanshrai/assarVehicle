import express from 'express';
import * as categoryController from '../controller/category.controller.js';

var router = express.Router();

router.post("/save",categoryController.save);

router.get("/fetch",categoryController.fetch);

router.delete("/delete/:id",categoryController.deleteUser);

router.patch("/update",categoryController.updateUser);

export default router;
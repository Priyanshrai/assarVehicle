import express from 'express';
import * as documentController from '../controller/document.controller.js';

var router = express.Router();

router.post("/save",documentController.save);

router.get("/fetch",documentController.fetch);

router.delete("/delete/:id",documentController.deleteDocument);

router.patch("/update",documentController.updateDocument);

router.post("/login",documentController.login);

export default router;
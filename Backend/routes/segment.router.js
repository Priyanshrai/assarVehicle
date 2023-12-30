import express from 'express';
import * as segmentController from '../controller/segment.controller.js';

var router = express.Router();

router.post("/save",segmentController.save);

router.get("/fetch",segmentController.fetch);

router.delete("/delete/:id",segmentController.deleteDocument);

router.patch("/update",segmentController.updateDocument);

router.post("/login",segmentController.login);

export default router;
import express from 'express';
import * as listingController from '../controller/listing.controller.js';

var router = express.Router();

router.post("/save",listingController.save);

router.get("/fetch/:id", listingController.fetch);


router.delete("/delete/:id",listingController.deleteDocument);

router.patch("/update",listingController.updateDocument);

router.post("/login",listingController.login);

export default router;
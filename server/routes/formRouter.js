import express from "express";
import { post } from "../controller/formController.js";
import { get } from "../controller/formController.js";

const router =express.Router();

router.post("/post-data",post);

router.get("/get-data",get);

export default router;
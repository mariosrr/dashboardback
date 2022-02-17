import { Router } from "express";
import { getEntries } from "../controllers/warehouseEntry.controller";
import cors from "cors";
import { append } from "express/lib/response";

const router = Router();

router.get('/entries', getEntries);

module.exports = router;
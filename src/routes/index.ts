import { Express, Router } from "express";
import testRoutes from './test.route';

const router = Router();

const PREFIX = "/api";

router.use(PREFIX, testRoutes)

export default router;
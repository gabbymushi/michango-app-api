import express from 'express';
const router = express.Router();
import * as configController from "./config.controller";

router.post('/', configController.setConfig);
router.get('/', configController.getConfigs);
router.get('/getConfigValue', configController.getConfigValue);

export const ConfigRoutes = router;

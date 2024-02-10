import express from 'express';

var router = express.Router();

import { router as routerFromksSample } from './ksSample/route.js';

router.use('/ksSample', routerFromksSample);

export { router };
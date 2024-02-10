import express from 'express';

var router = express.Router();

import { StartFunc as StartFuncTableNames } from './TableNames.js';

router.get('/', async (req, res) => {
    let LocalTablesArray = await StartFuncTableNames();
    
    res.json(LocalTablesArray);
});

export { router };


import fs from 'fs';

import { StartFunc as StartFuncFoldersOnly } from './FoldersOnly.js';
import { StartFunc as StartFuncForImports } from './ForImports.js';
import { StartFunc as StartFuncForRouterUse } from './ForRouterUse.js';

let StartFunc = ({ inTablesCollection, inFrom, inTo }) => {
    let LocalTablesCollection = inTablesCollection;

    let LocalFirstLevelFolders = LocalTablesCollection.children.filter(element => {
        return "children" in element
    });

    StartFuncFoldersOnly({
        inTablesCollection: LocalTablesCollection,
        inFrom,
        inTo
    });

    let LocalFileName = "routes.js";
    let LocalFrom = inFrom;
    let LocalTo = inTo;

    let LocalFileData = fs.readFileSync(`${LocalFrom}/${LocalFileName}`);

    let LocalFromForImports = StartFuncForImports({ inEndPointsArray: LocalFirstLevelFolders, inFileData: LocalFileData.toString() });
    let LocalFromForRouterUse = StartFuncForRouterUse({ inEndPointsArray: LocalFirstLevelFolders, inFileData: LocalFromForImports });

    fs.writeFileSync(`${LocalTo}/${LocalFileName}`, LocalFromForRouterUse);
};

export { StartFunc };
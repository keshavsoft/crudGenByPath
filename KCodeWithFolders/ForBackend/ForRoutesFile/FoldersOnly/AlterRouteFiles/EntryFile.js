import fs from 'fs';

import { StartFunc as StartFuncForImports } from './ForImports.js';
import { StartFunc as StartFuncForRouterUse } from './ForRouterUse.js';

let StartFunc = ({ inTablesCollection, inTo }) => {
    // let LocalTablesCollection = inTablesCollection;

    let LocalFileName = "routes.js";
    // let LocalFrom = inFrom;
    let LocalTo = inTo;

    let LocalTablesCollection = inTablesCollection;

    let LocalFirstLevelFolders = LocalTablesCollection.children.filter(element => {
        return "children" in element
    });

    LocalFirstLevelFolders.forEach(LoopFirst => {
        let LocalSecondLevelFiles = LoopFirst.children.filter(element => {
            return "children" in element === false;
        });

        let LocalFileData = fs.readFileSync(`${LocalTo}/${LoopFirst.name}/${LocalFileName}`);
        let LocalFromForImports;
        let LocalFromForRouterUse;
        
        LocalFromForImports = StartFuncForImports({ inTablesCollection: LocalSecondLevelFiles, inFileData: LocalFileData.toString() });
        LocalFromForRouterUse = StartFuncForRouterUse({ inTablesCollection: LocalSecondLevelFiles, inFileData: LocalFromForImports });

        // LocalSecondLevelFiles.forEach(LoopSecond => {
        //     LocalFromForImports = StartFuncForImports({ inTablesCollection: LoopSecond, inFileData: LocalFileData.toString() });
        //     LocalFromForRouterUse = StartFuncForRouterUse({ inTablesCollection: LoopSecond, inFileData: LocalFromForImports });
        // });

        fs.writeFileSync(`${LocalTo}/${LoopFirst.name}/${LocalFileName}`, LocalFromForRouterUse);
    });


    // let LocalFileData = fs.readFileSync(`${LocalTo}/${LocalFileName}`);

    // let LocalFromForImports = StartFuncForImports({ inTablesCollection: LocalTablesCollection, inFileData: LocalFileData.toString() });
    // let LocalFromForRouterUse = StartFuncForRouterUse({ inTablesCollection: LocalTablesCollection, inFileData: LocalFromForImports });

    // fs.writeFileSync(`${LocalTo}/${LocalFileName}`, LocalFromForRouterUse);
};

export { StartFunc };
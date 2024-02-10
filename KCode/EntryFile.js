import fs from 'fs-extra';

import { StartFunc as StartFuncPrepareTablesSchema } from "./PrepareTablesSchema/EntryFile.js";
import { StartFunc as StartFuncBaseDirs } from './BaseDirs/EntryFile.js';
import { StartFunc as StartFuncForRoutesFile } from './ForRoutesFile/EntryFile.js';

// import { StartFunc as StartFuncCopyDatas } from './CopyDatas/EntryFile.js';

import { StartFunc as StartFuncForkLowDb } from './ForkLowDb/EntryFile.js';
import { StartFunc as StartFuncForDataJson } from './ForDataJson.js';
import { StartFunc as StartFuncForRestClients } from './ForRestClients/EntryFile.js';

import { StartFunc as StartFuncForConfigJson } from './ForConfigJson/EntryFile.js';
import { StartFunc as StartFuncForModalClass } from './ForModalClass/EntryFile.js';
import { StartFunc as StartFuncFortableNameJson } from './FortableNameJson/EntryFile.js';

import { StartFunc as StartFuncForFrontEnd } from './ForFrontEnd/ForPublic/EntryFile.js';
import { StartFunc as StartFuncForDatabase } from './ForDatabase/EntryFile.js';

let StartFunc = ({ inFilesArray }) => {
    let LocalFilesArray = inFilesArray;
    let CommonFrom = "src";
    let CommonTo = "bin";

    StartFuncBaseDirs();

    StartFuncForFrontEnd({ inFilesArray: LocalFilesArray });
    StartFuncForDatabase({ inFilesArray: LocalFilesArray, inFrom: CommonFrom });

    StartFuncForRoutesFile({
        inEndPointsArray: LocalFilesArray.map(element => element.FileName),
        inFrom: CommonFrom, inTo: CommonTo
    });

    StartFuncForConfigJson({
        inTableConfig: inFilesArray,
        inFrom: CommonFrom, inTo: CommonTo
    });

    LocalFilesArray.forEach(element => {
        try {
            fs.cpSync(`${CommonFrom}/ksSample`, `${CommonTo}/${element.FileName}`, {
                recursive: true,
            });
        } catch (error) {
            console.log(error.message);
        };

        StartFuncForModalClass({
            inElement: element.FileName, inColumnsArray: element.Columns,
            inFrom: CommonFrom, inTo: CommonTo
        });

        StartFuncForkLowDb({
            inElement: element.FileName, inColumnsArray: element.Columns,
            inFrom: CommonFrom, inTo: CommonTo
        });

        // StartFuncForSequelize({
        //     inElement: element.FileName, inColumnsArray: element.Columns,
        //     inFrom: CommonFrom, inTo: CommonTo
        // });

        StartFuncForDataJson({
            inElement: element.FileName, inColumnsArray: element.Columns,
            inFrom: CommonFrom, inTo: CommonTo
        });

        StartFuncForRestClients({
            inElement: element.FileName, inColumnsArray: element.Columns,
            inFrom: CommonFrom, inTo: CommonTo
        });

        // StartFuncCopyDatas({
        //     inFromFolderName: CommonFromFolderName
        // });

        StartFuncFortableNameJson({
            inElement: element.FileName, inColumnsArray: element.Columns,
            inFrom: CommonFrom, inTo: CommonTo
        });

        // fs.copyFileSync(`${CommonFrom}/Config.json`, `${CommonTo}/Config.json`);
    });
};

let LocalFilesArray = StartFuncPrepareTablesSchema();
// console.log("LocalFilesArray : ", LocalFilesArray);

StartFunc({ inFilesArray: LocalFilesArray });

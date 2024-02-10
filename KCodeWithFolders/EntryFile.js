import { StartFunc as StartFuncPrepareTablesSchema } from "./PrepareTablesSchema/EntryFile.js";
import { StartFunc as StartFuncBaseDirs } from './BaseDirs/EntryFile.js';
import { StartFunc as StartFuncForDatabase } from './ForDatabase/EntryFile.js';
import { StartFunc as StartFuncForBackend } from './ForBackend/EntryFile.js';

let StartFunc = ({ inFilesArray }) => {
    let LocalFilesArray = inFilesArray;
    let CommonFrom = "src";
    let CommonTo = "bin";

    StartFuncBaseDirs({ inTo: CommonTo });

    // StartFuncForFrontEnd({ inFilesArray: LocalFilesArray });

    // StartFuncForDatabase({ inFilesArray: LocalFilesArray, inFrom: CommonFrom });
    
    StartFuncForBackend({
        inTablesCollection: LocalFilesArray,
        inFrom: CommonFrom,
        inTo: CommonTo
    });
};

let LocalFilesArray = StartFuncPrepareTablesSchema();
console.log("LocalFilesArray : ", LocalFilesArray);

StartFunc({ inFilesArray: LocalFilesArray });

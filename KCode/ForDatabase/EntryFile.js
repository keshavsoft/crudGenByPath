import { StartFunc as StartFuncForSequelize } from "./sqlite/ForSequelize/EntryFile.js";
import { StartFunc as StartFuncForFlatJson } from "./ForFlatJson/EntryFile.js";

import ConfigJson from '../../src/Config.json' assert {type: 'json'};

let StartFunc = ({ inFilesArray, inFrom }) => {
    if (ConfigJson.isSequelize) {
        StartFuncForSequelize({
            inColumnsJson: inFilesArray,
            inFrom
        });

        return;
    };

    StartFuncForFlatJson({
        inTablesCollection: inFilesArray,
        inFrom
    });
};

export { StartFunc };

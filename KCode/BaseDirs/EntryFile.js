import fs from 'fs';
import { StartFunc as StartFuncForKSequelize } from './ForKSequelize/EntryFile.js';
import ConfigJson from '../../src/Config.json' assert {type: 'json'};

let StartFunc = () => {
    try {
        if (fs.existsSync("bin") === false) {
            fs.mkdirSync("bin");
        };

        StartFuncForKSequelize();

        if (fs.existsSync(`${ConfigJson.ToDataDetails.DataPath}/${ConfigJson.ToDataDetails.DataPk}`) === false) {
            fs.mkdirSync(`${ConfigJson.ToDataDetails.DataPath}/${ConfigJson.ToDataDetails.DataPk}`, { recursive: true });
        };
    } catch (error) {
        console.log("error  : ", error);
    };
};

export { StartFunc };
import fs from 'fs';
import ConfigJson from '../../src/Config.json' assert {type: 'json'};

let StartFunc = ({ inTo }) => {
    let LocalTo = inTo;

    try {
        if (fs.existsSync(LocalTo) === false) {
            fs.mkdirSync(LocalTo);
        };

        if (fs.existsSync(`${ConfigJson.ToDataDetails.DataPath}/${ConfigJson.ToDataDetails.DataPk}`) === false) {
            fs.mkdirSync(`${ConfigJson.ToDataDetails.DataPath}/${ConfigJson.ToDataDetails.DataPk}`, { recursive: true });
        };
    } catch (error) {
        console.log("error  : ", error);
    };
};

export { StartFunc };
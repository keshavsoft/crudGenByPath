import { StartFunc as StartFuncForRoutesFile } from './ForRoutesFile/EntryFile.js';

let StartFunc = ({ inTablesCollection, inFrom, inTo }) => {
    let LocalTablesCollection = inTablesCollection;

    if ("children" in LocalTablesCollection === false) {
        return;
    };

    StartFuncForRoutesFile({ inTablesCollection, inFrom, inTo });
};

export { StartFunc };
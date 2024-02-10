import { StartFunc as StartFuncFirstLevelEntryFile } from "./FirstLevelEntryFile.js";
import { StartFunc as StartFuncSecondLevelEntryFile } from "./SecondLevelEntryFile.js";

let StartFunc = ({ inTablesCollection }) => {
    let LocalTablesCollection = inTablesCollection;

    if ("children" in LocalTablesCollection === false) {
        return;
    };

    StartFuncFirstLevelEntryFile({ inTablesCollection: LocalTablesCollection });
    StartFuncSecondLevelEntryFile({ inTablesCollection: LocalTablesCollection });
};

export { StartFunc };

import { StartFunc as StartFuncForFlatJson } from "./ForFlatJson/EntryFile.js";

let StartFunc = ({ inFilesArray, inFrom }) => {
      StartFuncForFlatJson({
        inTablesCollection: inFilesArray,
        inFrom
    });
};

export { StartFunc };

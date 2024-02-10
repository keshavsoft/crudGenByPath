import { StartFunc as StartFuncFoldersOnly } from "./FirstLevel/FoldersOnly.js";
import { StartFunc as StartFuncFilesOnly } from "./FirstLevel/FilesOnly.js";

let StartFunc = ({ inTablesCollection }) => {
    StartFuncFoldersOnly({ inTablesCollection });
    StartFuncFilesOnly({ inTablesCollection })
};

export { StartFunc };

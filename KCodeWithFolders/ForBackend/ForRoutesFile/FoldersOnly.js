import { StartFunc as StartFuncCreateFolders } from './FoldersOnly/CreateFolders.js';
import { StartFunc as StartFuncCreateRouteFiles } from './FoldersOnly/CreateRouteFiles.js';
import { StartFunc as StartFuncAlterRouteFiles } from './FoldersOnly/AlterRouteFiles/EntryFile.js';

let StartFunc = ({ inTablesCollection, inFrom, inTo }) => {
    StartFuncCreateFolders({ inTablesCollection, inTo });
    StartFuncCreateRouteFiles({ inTablesCollection, inFrom, inTo });
    StartFuncAlterRouteFiles({ inTablesCollection, inFrom, inTo });
};

export { StartFunc };

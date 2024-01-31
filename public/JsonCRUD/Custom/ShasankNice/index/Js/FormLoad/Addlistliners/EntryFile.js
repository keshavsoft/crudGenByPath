import { StartFunc as StartFuncUsersRowCount } from "./UsersRowCount/EntryFile.js";
import { StartFunc as StartFuncTechniciansRowCount } from "./TechniciansRowCount/EntryFile.js";
import { StartFunc as StartFuncTicketsRowCount } from "./TicketsRowCount/EntryFile.js";

const StartFunc = () => {
    StartFuncUsersRowCount();
    StartFuncTechniciansRowCount();
    StartFuncTicketsRowCount();
};
export { StartFunc };
import { StartFunc as StartFuncAddlistliners } from "./Addlistliners/EntryFile.js";

const StartFunc = () => {
    StartFuncAddlistliners();
    jFLocalStartFunc();
};

let jFLocalStartFunc = () => {
    let jVarLocalUsersRowCountButtonClickId = document.getElementById("UsersRowCountButtonClickId");
    let jVarLocalTechniciansRowCountButtonClickId = document.getElementById("TechniciansRowCountButtonClickId");
    let jVarLocalTicketsRowCountButtonClickId = document.getElementById("TicketsRowCountButtonClickId");

    if (jVarLocalUsersRowCountButtonClickId === null === false) {
        jVarLocalUsersRowCountButtonClickId.click();
    };
    if (jVarLocalTechniciansRowCountButtonClickId === null === false) {
        jVarLocalTechniciansRowCountButtonClickId.click();
    };
    if (jVarLocalTicketsRowCountButtonClickId === null === false) {
        jVarLocalTicketsRowCountButtonClickId.click();
    };
};
export { StartFunc };
let StartFunc = ({ inData }) => {
    LocalFuncForUsersRowCountId({ inData })
};

let LocalFuncForUsersRowCountId = ({ inData }) => {
    let jVarLocalUsersRowCountId = document.getElementById('TicketsRowCountId');

    if (jVarLocalUsersRowCountId === null === false) {
        jVarLocalUsersRowCountId.innerHTML = inData
    };
};

export { StartFunc }
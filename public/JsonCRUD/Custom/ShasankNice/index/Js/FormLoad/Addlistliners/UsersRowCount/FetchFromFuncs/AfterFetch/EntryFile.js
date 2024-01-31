let StartFunc = ({ inData }) => {
    LocalFuncForUsersRowCountId({ inData })
};

let LocalFuncForUsersRowCountId = ({ inData }) => {
    let jVarLocalUsersRowCountId = document.getElementById('UsersRowCountId');

    if (jVarLocalUsersRowCountId === null === false) {
        jVarLocalUsersRowCountId.innerHTML = inData
    };
};

export { StartFunc }
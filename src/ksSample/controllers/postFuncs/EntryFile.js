import {
    PostFunc as PostFuncRepo,
    PostFromModalFunc as PostFromModalFuncRepo,
    PostUploadFunc as PostUploadFuncRepo,
    PostGetSelectColumnsFunc as PostGetSelectColumnsFuncRepo,
    PostUploadFromModalFunc as PostUploadFromModalFuncRepo,
    PostGetUserFunc as PostGetUserFuncRepo
} from '../../repos/postFuncs/EntryFile.js';

import {
    ColumnsPullFunc
} from '../../DataColumns.js';

import { ClassSample } from '../../ModalClass.js';

import { StartFunc as StartFuncTockenGenerate } from "../../Tocken/Generate.js";


let PostFunc = async (req, res) => {
    let LocalBody = req.body;
    let LocalModalObject = new ClassSample({ ...LocalBody });

    let LocalFromRepo = await PostFuncRepo({ ...LocalModalObject });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.json(LocalFromRepo);
};

let PostUploadImageFunc = async (req, res) => {
    let LocalBody = req.body;
    let LocalModalObject = new ClassSample({ ...LocalBody });

    let LocalFromRepo = await PostFuncRepo({ ...LocalModalObject });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.json(LocalFromRepo);
};

let PostFromModalFunc = (req, res) => {
    let LocalBodyData = req.body;
    let LocalBodyAsModal = ColumnsPullFunc()(LocalBodyData);

    let LocalFromRepo = PostFromModalFuncRepo({ LocalBodyAsModal });
    res.json(LocalFromRepo);
};

let PostUploadFunc = (req, res) => {
    let LocalBodyData = req.body;
    let LocalModalObject = LocalFromArray({ inArray: LocalBodyData });

    let LocalFromRepo = PostUploadFuncRepo({ LocalBodyAsModal: LocalModalObject });
    res.json(LocalFromRepo);
};

let LocalFromArray = ({ inArray }) => {
    let LocalNewAray = [];

    LocalNewAray = inArray.map(element => {
        return new ClassSample({ ...element });
    });

    return LocalNewAray;
};

let PostUploadFromModalFunc = async (req, res) => {
    let LocalBodyData = req.body;

    let LocalFromRepo = await PostUploadFromModalFuncRepo({ LocalBodyAsModal: LocalBodyData });

    if (LocalFromRepo.KTF === false) {
        res.status(500).send(LocalFromRepo.KReason);
        return;
    };

    res.json(LocalFromRepo);
};

let PostGetSelectColumnsFunc = (req, res) => {
    let LocalBodyData = req.body;
    let LocalBodyAsModal = ColumnsPullFunc()(LocalBodyData);

    let LocalFromRepo = PostGetSelectColumnsFuncRepo({ LocalBodyAsModal });
    res.json(LocalFromRepo);
};

let PostGetUserFunc = async (req, res) => {
    let LocalBodyData = req.body;
    let LocalBodyAsModal = ColumnsPullFunc()(LocalBodyData);

    let LocalFromRepo = await PostGetUserFuncRepo({ LocalBodyAsModal });

    if (Object.keys(LocalFromRepo) !== 0) {
        let localTocken = StartFuncTockenGenerate({ inResponceData: LocalFromRepo });
        if (localTocken.KTF) {
            res.cookie('KToken', localTocken.token, { maxAge: 900000, httpOnly: false });
            res.json(localTocken);
        };
    };
    res.json(LocalFromRepo);
};

export {
    PostFunc, PostFromModalFunc,
    PostUploadFunc, PostGetSelectColumnsFunc, PostUploadFromModalFunc, PostUploadImageFunc, PostGetUserFunc
};
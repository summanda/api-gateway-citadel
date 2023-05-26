const getUsers = ((req: any, res: any) => {
    res.status(200).send([
        { uid: '1', name: 'Suman' },
        { uid: '2', name: 'Amol' },
        { uid: '3', name: 'Josh' }
    ]
    );
});

const getUser = ((req: any, res: any) => {
    res.status(200).send(
        { uid: '1', name: 'Suman' }
    );
});

export {
    getUsers,
    getUser
};
const ROUTES: any = {
    any: {
        path:"**"
    },
    login: {
        path: "login"
    },
    registration: {
        path: "registration"
    },
    system: {
        path: "system"
    },
    planning: {
        path: "planning"
    },
    bill: {
        path: "bill"
    },
    history: {
        path: "history"
    },
    records: {
        path: "records"
    }
};

export const ENVIRONMENT: any = {
    routes: ROUTES,
    serverBase: "http://localhost:4200"
};

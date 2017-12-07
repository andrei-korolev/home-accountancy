const ROUTES: any = {
    any: {
        path: "**"
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
    },
    users: {
        path: "users"
    }
};

const OUTSOURCING_SERVICES: any = {
    fixer: {
        path: "https://api.fixer.io/latest"
    }
};

export const ENVIRONMENT: any = {
    routes: ROUTES,
    outsourcingServices: OUTSOURCING_SERVICES,
    serverBase: "http://localhost:4200"
};

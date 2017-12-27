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
    }
};

const SERVICES: any = {
    categories: {
        path: "categories"
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
    outsourcingServices: OUTSOURCING_SERVICES,
    routes: ROUTES,
    serverBase: "http://localhost:4200",
    services: SERVICES
};

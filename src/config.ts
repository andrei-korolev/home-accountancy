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
    bill: {
        path: "bill"
    },
    categories: {
        path: "categories"
    },
    events: {
        path: "events"
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

const TYPE_ENTRIES: any = {
    income: "income",
    outcome: "outcome"
};

export const ENVIRONMENT: any = {
    outsourcingServices: OUTSOURCING_SERVICES,
    routes: ROUTES,
    serverBase: "http://localhost:4200",
    services: SERVICES,
    typeEntries: TYPE_ENTRIES
};

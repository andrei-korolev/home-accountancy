const ROUTES: any = {
    any: {
        path:"**"
    },
    login: {
        path: "login"
    },
    registration: {
        path: "registration"
    }
};

export const ENVIRONMENT: any = {
    routes: ROUTES,
    serverBase: "http://localhost:4200"
};

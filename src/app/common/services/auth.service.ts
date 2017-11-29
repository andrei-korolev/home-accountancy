import {Injectable} from "@angular/core";

@Injectable()
export class AuthService {
    private isAuthenticated: boolean = false;

    public login(): void {
        this.isAuthenticated = true;
    }

    public logout(): void {
        this.isAuthenticated = false;
        window.localStorage.clear();
    }

    public isLoggedIn(): boolean {
        return this.isAuthenticated;
    }
}

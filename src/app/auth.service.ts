export class AuthService {
    loggedIn = false;

    login() {
        this.loggedIn = true;
    }

    logOut() {
        this.loggedIn = false;
    }

    isAuthenticated() {
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                        resolve(this.loggedIn);
                }, 1000);
            }
        );

        return promise;
    }
}

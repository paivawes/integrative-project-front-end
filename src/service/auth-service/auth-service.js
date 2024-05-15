import axios from "axios";

class AuthService {
    constructor() {
        this.auth = axios.create({
            baseURL: "https://integrative-project-backend.vercel.app",
        });

        this.auth.interceptors.request.use((config) => {
            return config;
        });

        const { token } = JSON.parse(localStorage.getItem("current_user") || "{}");
        if (token) {
            this.auth.defaults.headers["Authorization"] = `Bearer ${token}`;
        }
    }

    getApi() {
        return this.auth;
    }

    setAuthorizationHeader(token) {
        this.auth.defaults.headers["Authorization"] = `Bearer ${token}`;
    }

    removeAuthorizationHeader() {
        delete this.auth.defaults.headers["Authorization"];
    }
}

export default AuthService;

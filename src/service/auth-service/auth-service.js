import axios from "axios";

class AuthService {
    constructor() {
        this.auth = axios.create({
            baseURL: "https://integrative-project-backend.vercel.app",
        });

        this.auth.interceptors.request.use((config) => {
            const token = this.getToken()
            if (token) {
                config.headers["Authorization"] = `Bearer ${token}`
            }
            return config
        });
    }

    getApi() {
        return this.auth;
    }

    setAuthorizationHeader(token) {
        localStorage.setItem('token', token)
        this.auth.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }

    removeAuthorizationHeader() {
        localStorage.removeItem('token');
        delete this.auth.defaults.headers.common["Authorization"]
    }

    getToken() {
        return localStorage.getItem('token')
    }
}

export default AuthService;

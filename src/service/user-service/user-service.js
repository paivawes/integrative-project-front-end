import AuthService from "../auth-service/auth-service.js"

export class UserService {

    path
    login
    auth  
    constructor() {
        this.path = '/user'
        this.login = '/login'
        this.auth = new AuthService()
    }

    async log(request) {
        try {
            const response = await this.auth.getApi().post(this.login, request)
            const token = response.data.token
            const user = response.data.user

            localStorage.setItem('user', JSON.stringify(user))

            this.auth.setAuthorizationHeader(token)
            
            return response
        } catch (error) {
            console.error('Erro ao fazer login:', error)
            throw error;
        }
    }

    async findAll() {
        const response = await this.auth.getApi().get(this.path)
        return response.data
    }

    async create(user) {
        const response = await this.auth.getApi().post(this.path, user)
        return response.data
    }
}
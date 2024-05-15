import AuthService from "../auth-service/auth-service.js"

export class UserService {

    path
    login
    auth  
    

    constructor() {
        this.path = 'user'
        this.login = 'login'
        this.auth = new AuthService()
    }

    async log(request){
        const response = await this.auth.getApi().post(this.login, request)

        console.log(response)

        // const autentication = await this.auth.setAuthorizationHeader(response.token)

        return response
    }

    async findAll() {
        const response = await this.auth.getApi().get(this.path)
        return response.data
    }

    async create(request) {
        const response = await this.auth.getApi().post(this.path, request)
        return response.data
    }
}
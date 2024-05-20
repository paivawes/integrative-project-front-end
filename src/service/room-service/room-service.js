import AuthService from "../auth-service/auth-service"

export class RoomService {

    auth
    path

    constructor() {
        this.path = 'room'
        this.auth = new AuthService()
    }

    findAll() {
        const response = this.auth.getApi().get(this.path)
        return response.data
    }
}
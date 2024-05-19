import AuthService from "../auth-service/auth-service";

class RoomService {

    path
    auth

    constructor() {
        this.path = '/room'
        this.auth = new AuthService()
    }

    findAll() {
        const response = this.auth.getApi().get(this.path)
        return response
    }

    findById(id) {
        const response = this.auth.getApi().get(`${this.path}/id`, id)
        return response
    }

    create(room) {
        const response = this.auth.getApi().post(this.path, room)
        return response
    }

    delete(id) {
        const response = this.auth.getApi().delete(`${this.path}/id`, id)
        return response
    }

}

export default RoomService;

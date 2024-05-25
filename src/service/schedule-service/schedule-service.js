import AuthService from "../auth-service/auth-service"

class ScheduleService {

    path
    auth

    constructor() {
        this.path = '/schedule'
        this.auth = new AuthService()
    }

    findAll(user, status, startPeriod, endPeriod) {
        let queryParams = {}

        if (user) {
            queryParams.user = user
        }

        if (status) {
            queryParams.status = status
        }

        if (startPeriod && endPeriod) {
            queryParams.startPeriod = startPeriod
            queryParams.endPeriod = endPeriod
        }

        const response = this.auth.getApi().get(this.path,  { params: queryParams })
        return response
    }

    findById(id) {
        const response = this.auth.getApi().get(`${this.path}/id`, id)
        return response
    }

    create(schedule) {
        const response = this.auth.getApi().post(this.path, schedule)
        return response
    }

    update(schedule) {
        const response = this.auth.getApi().put(`${this.path}/id`, schedule)
        return response
    }

    delete(id, schedule) {
        const response = this.auth.getApi().delete(`${this.path}/id`, id, schedule)
        return response
    }


}

export default ScheduleService;
import { AdminRepository } from "../../admin.repository";




export class AdminService {
    constructor(private readonly adminRepository: AdminRepository){}

    async getTotalStudent(){
        const student = await this.adminRepository.getTotalStudent()
        return student
    }

}
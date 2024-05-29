export class StudentModel {
    dni: number
    name: string
    module1: string
    module2: string
    technicalCareer: string

    constructor(dni: number, name: string, module1: string, module2: string, technicalCareer: string) {
        this.dni = dni;
        this.name = name;
        this.module1 = module1;
        this.module2 = module2;
        this.technicalCareer = technicalCareer;
    }

    static fromJson(json: any): StudentModel {
        return new StudentModel(json.dni, json.name, json.module1, json.module2, json.technicalCareer);
    }
}
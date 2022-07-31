import { HttpClient } from "@angular/common/http";
import { Observable,map } from "rxjs";
import { Employee } from "../common/employee";
import { Injectable } from "@angular/core";
import { Department } from "../common/department";
@Injectable({
    providedIn:'root'
})

export class ManagementService {

    private empUrl ="http://localhost:8080/api/emp"
     deptUrl ="http://localhost:8080/api/dept"
     
    constructor(private httpClient: HttpClient){}

    getAllEmployees() :Observable<Employee[]>{
        return this.httpClient.get<getEmployeeDetails>(this.empUrl).pipe(map(data=>data._embedded.employees));
    }

    getAllDepartments() :Observable<Department[]>{
        return this.httpClient.get<getDepartments>(this.deptUrl).pipe(map(data1=>data1._embedded.departments))
    }
}

interface getEmployeeDetails{
    _embedded :{
        employees:Employee[]
    }
}
interface getDepartments{
    _embedded :{
        departments:Department[]
    }
}


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from '../../common/department';
import { Employee } from '../../common/employee';
import { ManagementService } from '../../service/management-service';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {
  
  employees:Employee[]

  constructor(private empService:ManagementService,
              private route:Router) { }

  ngOnInit(): void {
    console.log(this.getAllEmployees());
    this.getAllEmployees()
  }

  getAllEmployees(){
    this.empService.getAllEmployees().subscribe(data=>{console.log(data);
      this.employees=data;
    });
   
  }
  addEmployee(){
    this.route.navigateByUrl("/addEmployees");
  }

  addCategory(){
    this.route.navigateByUrl("/addCategory")
  }

}

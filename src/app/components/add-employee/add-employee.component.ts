import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/common/employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private route:Router) { }
  employees : Employee[]

  formModel : Employee = new Employee(0,"","",new Date,0,0,0,0);
  ngOnInit(): void {
    this.onSubmit();
  }
  onSubmit(){
    console.log(this.formModel)
    // this.employees.push(this.formModel);
    // this.route.navigateByUrl("/employees");
  }

}

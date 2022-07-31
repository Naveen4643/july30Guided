import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from 'src/app/common/department';

@Component({
  selector: 'app-add-departments',
  templateUrl: './add-departments.component.html',
  styleUrls: ['./add-departments.component.css']
})
export class AddDepartmentsComponent implements OnInit {

  departments: Department[]
  constructor(private route:Router) { }
  
  formModel:Department=new Department(0,"","")
  
  ngOnInit(): void {
    this.onSubmit;
  }

  onSubmit(){
    console.log(this.formModel)
    this.route.navigateByUrl("/addCategory")
    // this.departments.push(this.formModel);
    // this.route.navigateByUrl("departments")
  }

}

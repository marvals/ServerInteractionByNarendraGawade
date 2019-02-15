import { Component, OnInit } from '@angular/core';
import { Employee } from './EmployeeModel';
import { AddEmployeeService } from '../Services/AddEmployeeService/add-employee.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employee = new Employee();
  registerForm: FormGroup;
  submitted = false;
  constructor(private EmployeeService: AddEmployeeService, private router: Router , private formBuilder: FormBuilder) { }

  ngOnInit() {
       this.registerForm = this.formBuilder.group({
            EmployeeId: ['', Validators.required],
            EmployeeName: ['', Validators.required],
            Designation: ['', Validators.required],
            Dob: ['', Validators.required],
             Salary: ['', [Validators.required, Validators.minLength(6)]]
        });
  }

   get f() { return this.registerForm.controls; }

  AddDeatails() {
     this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }
    console.log(this.employee);
    this.EmployeeService.AddEmployee(this.employee).subscribe((data) => {
      console.log(data);
      alert('Added succesfully');
      this.router.navigate(['AllEmployee']);
    },
      err => {
        console.log(err);
      }
    );
  }
}

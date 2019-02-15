import { Component, OnInit } from '@angular/core';
import { AllEmployeeService } from '../Services/AllEmployeeServices/all-employee.service';
import { HttpClient } from '@angular/common/http';
import { CommonDataService } from '../Services/CommanDataServices/common-data.service';
import { Router } from '@angular/router';
import { EditEmployeeService } from '../Services/EditEmployeeServices/edit-employee.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  EmployeeData = [];
  private Gridapi;
  public rowSelection;
  columnDefs = [
    { field: 'EmployeeId' },
    { field: 'EmployeeName' },
    { field: 'Designation', editable: true },
    { field: 'Dob', editable: true },
    { field: 'Salary', editable: true }
  ];

  rowData = [];
  constructor(private Employee: AllEmployeeService, private http: HttpClient, private commondata: CommonDataService,
    private editService: EditEmployeeService , private router: Router) {
    this.rowSelection = 'multiple';
  }

  ngOnInit() {
    this.Employee.getallEmployeedata().subscribe((data: any) => {
      this.rowData = data;
      console.log(this.rowData);
    },
      err => {
        console.log(err);
      }
    );
  }

  onGridReady(params) {
    this.Gridapi = params.api;
  }
  EditSelectrow() {
    const selectedRowNodes = this.Gridapi.getSelectedNodes();
    console.log(selectedRowNodes);
    const selectedIds = selectedRowNodes.map(function (rowNode) {
      return rowNode.id;
    });
    if (selectedIds.length <= 0) {
      alert('Please Select the Row To Delete');
      return '';
    }
    this.commondata.Employe.EmployeeId = this.rowData[selectedIds].EmployeeId;
    this.commondata.Employe.EmployeeName = this.rowData[selectedIds].EmployeeName;
    this.commondata.Employe.Dob = this.rowData[selectedIds].Dob;
    this.commondata.Employe.Designation = this.rowData[selectedIds].Designation;
    this.commondata.Employe.Salary = this.rowData[selectedIds].Salary;
    // call upadte service function ;
    this.editService.UpdateEmployee(this.rowData[selectedIds].EmployeeId, this.rowData[selectedIds].EmployeeName,
      this.rowData[selectedIds].Designation, this.rowData[selectedIds].Dob, this.rowData[selectedIds].Salary)
      .subscribe(data => {
        console.log(data);
        alert('Edit Succesfully');
        this.router.navigate(['/AllEmployee']);
      });
    // console.log(this.rowData[selectedIds]);
  }

}

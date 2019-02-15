import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeeDeatailsComponent } from './employee-deatails/employee-deatails.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Config } from 'src/Config';
import { MenuComponent } from './menu/menu.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { AllEmployeeComponent } from './all-employee/all-employee.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { AgGridModule } from 'ag-grid-angular';
import { ValiidationformComponent } from './valiidationform/valiidationform.component';

const appRoutes = [
  { path: '', component: MenuComponent },
  { path: 'AllEmployee', component: AllEmployeeComponent },
  { path: 'addemployee', component: AddEmployeeComponent },
  { path: 'EditEmployee', component: EditComponent },
  { path: 'DeleteEmployee', component: DeleteComponent },
  { path: 'editemployyee', component: UpdateEmployeeComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    EmployeeDeatailsComponent,
    MenuComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    AllEmployeeComponent,
    DeleteComponent,
    EditComponent,
    ValiidationformComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    AgGridModule.withComponents([]),
    ReactiveFormsModule
  ],
  providers: [Config],
  bootstrap: [ValiidationformComponent]
})
export class AppModule { }

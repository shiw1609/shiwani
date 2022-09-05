import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { CommonserviceService } from 'src/app/shared/commonservice.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public commonservice: CommonserviceService) { }
   emp: Employee[]

  ngOnInit(): void { 
  }

  addData(emp:Employee){
    if(emp.id==0)
    {
  this.commonservice.postData(emp).subscribe();
  window.location.reload();
    }
    else{
      this.commonservice.updateData(emp).subscribe();
      window.location.reload();
    }
  }
  resetData(){
     this.commonservice.e=Object.assign({},null)
  }

}

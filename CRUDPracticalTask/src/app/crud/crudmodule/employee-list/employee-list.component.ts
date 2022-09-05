import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { CommonserviceService } from 'src/app/shared/commonservice.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(public commonservice: CommonserviceService) { }

  emplist: Employee[];

  ngOnInit(): void {
    this.commonservice.getdata().subscribe((data:Employee[])=>
      {
      this.emplist = data;
      });
  }

  deletedata(id:number){
    this.commonservice.deleteData(id).subscribe();
    window.location.reload();
 }

  editData(emp:Employee){
    this.commonservice.e=Object.assign({},emp);
  }

  

}

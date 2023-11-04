import { Component, OnInit, Input } from '@angular/core';
import { StudentInfo } from '../myClasses/studentInfo';
@Component({
  selector: 'app-material-uicontent',
  templateUrl: './material-uicontent.component.html',
  styleUrls: ['./material-uicontent.component.css']
})
export class MaterialUIContentComponent implements OnInit {
  @Input() importedStudentList!:StudentInfo[];
 displayInfo:any=(val:any)=>{
    alert(`Name: ${val.studentName}\n campus: ${val.studentCampus} \n username: ${val.studentUserName} \n enrollement number; ${val.studentNumber}`)
  }
  constructor() {}

 
  ngOnInit(): void{
    console.log(this.importedStudentList)}

}

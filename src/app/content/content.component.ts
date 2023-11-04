import { Component, Input, OnInit } from '@angular/core';
import { StudentInfo } from '../myClasses/studentInfo';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
constructor(){ }
@Input() contentFetch!: StudentInfo;

campus: string =""
resetData(){
  this.campus=""
}

// getStyle():any{
//  return ( this.campus.toUpperCase() ==='DAVIS' ||  this.campus.toUpperCase() ==='TRAFALGAR') ? 'green' : 'red'
// }

// if we make the emptu input box then to use another background color
// use the following code
getStyle():any{
  if (this.campus!==""){
  return ( this.campus.toUpperCase() ==='DAVIS' ||  this.campus.toUpperCase() ==='TRAFALGAR'|| this.campus.toUpperCase() ==='TRAFALGAR' ) ? 'green' : 'red'
 }
 return 'lightblue'
}
// resetData(){
//   console.log("prints")
//   this.campus=""
// }
ngOnInit(): void {

}
ngAfterViewInit() : void{
  this.campus = this.contentFetch.studentCampus
}
}

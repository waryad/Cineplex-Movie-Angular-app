import { Component, OnInit, Input } from '@angular/core';
import { StudentInfo } from '../../myClasses/studentInfo';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(){ }

// name:string = "ABC XYZ"
name:string = '';
country:string='';
moviename: string='';
location:string='';
contact:string='';
@Input() headerFetch!: StudentInfo ;

// addTwoNumbers(first:number, second:number) {
// return first+second

// }
ngOnInit(): void {

}
// this function only take place after 

ngAfterViewInit():void{

  this.name = this.headerFetch.studentName
  this.country = this.headerFetch.studentCountry
  this.moviename= this.headerFetch.studentMovie
  this.location = this.headerFetch.studentLocation
  this.contact = this.headerFetch.studentContact
}
}

import { Component,OnInit,Input } from '@angular/core';
import { RoomListInterface ,  MovieDataInterface } from '../myInterfaces/jsonInterface';
@Component({
  selector: 'app-external-json-list',
  templateUrl: './external-json-list.component.html',
  styleUrls: ['./external-json-list.component.css']
})
export class ExternalJsonListComponent implements OnInit {
constructor() {}
@Input() movieData!: MovieDataInterface
@Input() roomList!: RoomListInterface[]

columnHeaders:string[]=['movieName','genre','runningtime','dateofrelease','Rating','AgeRestriction']
ngOnInit():void {

}
}

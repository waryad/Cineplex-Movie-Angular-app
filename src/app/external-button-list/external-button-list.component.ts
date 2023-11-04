import { Component,OnInit,Input } from '@angular/core';
import { RoomListInterface,  MovieDataInterface } from '../myInterfaces/jsonInterface';
@Component({
  selector: 'app-external-button-list',
  templateUrl: './external-button-list.component.html',
  styleUrls: ['./external-button-list.component.css']
})
export class ExternalButtonListComponent implements OnInit{
  constructor() {}
  @Input() movieData!: MovieDataInterface
  @Input() roomList!: RoomListInterface[]
  
  columnHeaders:string[]=['roomNumber','movieName','showTime']
  newRoomList!:RoomListInterface[]

  outputroomNumber!: string
  selectFunction(val:number){
    console.log(`roomNumber${val}selected`)
    this.newRoomList=[]
    this.outputroomNumber=`<h1>Welcome to Room ${val}</h1>`
    this.roomList.forEach((e)=>
    {
      if(e.roomNumber===val)
      this.newRoomList.push(e)
    }
    )
    console.log(this.newRoomList)
  }
  ngOnInit():void {
  }
}

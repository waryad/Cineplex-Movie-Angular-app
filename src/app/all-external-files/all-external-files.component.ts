import { Component, Input, OnInit} from '@angular/core';
import { RoomListInterface, MovieDataInterface } from '../myInterfaces/jsonInterface';
@Component({
  selector: 'app-all-external-files',
  templateUrl: './all-external-files.component.html',
  styleUrls: ['./all-external-files.component.css']
})
export class AllExternalFilesComponent implements OnInit {
  constructor(){}
  @Input() fetchExternalMovieData!: MovieDataInterface
  @Input() fetchExternalRooms!: RoomListInterface[]

  ngOnInit() :void{
console.log(this.fetchExternalMovieData)
console.log(this.fetchExternalRooms)
  }
}

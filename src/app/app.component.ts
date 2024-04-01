import { Component } from '@angular/core';
import { StudentInfo } from './myClasses/studentInfo';
import { LIST_OF_STUDENTS } from '../assets/data/studentsList';
import { myFooterDetail } from './myClasses/Myfooter';
import externalJSONDATA from '../assets/data/cp.json';
import { RoomListInterface, MovieDataInterface } from './myInterfaces/jsonInterface';
// we fetch the cp json file
// now i want to get program and courses into local storage
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  student1: StudentInfo = {
    studentName:'Deepinder Kaur Warya',
    studentCampus: 'Davis',
    studentCountry:'Canada',
    studentMovie: 'Cineplex Theaters',
   studentLocation:'Trinity mall Brampton',
    studentContact:'1-800-333-0061',
  }
  myinfofooter: myFooterDetail= {
    myEmail: 'itprodeep@gmail.com',
    myCollege: 'Sheridan College',
    myCampus : 'Davis Campus'

  }
  externalListOfStudents:StudentInfo[]=LIST_OF_STUDENTS

  externalJSONMovieData: MovieDataInterface = externalJSONDATA.MovieData
  externalJSONRooms:RoomListInterface[] = externalJSONDATA.rooms
}


interface RoomListInterface {
    roomNumber: number;
    name: string;
    movieName: string;
    genre: string;
    runningtime: string;
    capacity: number;
    // Make additional properties optional
    dateofrelease?: string;
    Rating?: string;
    AgeRestriction?: number;
  }
  
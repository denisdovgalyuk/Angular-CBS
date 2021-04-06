import {InMemoryDbService} from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService {
  createDb(): {} {
    return {
      comments: [
        {userName: 'Denis', commentText: 'Angular is very difficult framework', data: 1617701496263},
        {userName: 'Julia', commentText: 'Rx js is great!', data: 1617701502822},
        {userName: 'Natasha', commentText: 'I don\'t think front end is difficult', data: 1617700932415},
        {userName: 'Yegor', commentText: 'Backend is easy', data: 1617707123213},
        {userName: 'Nastya', commentText: 'Front-end is magic', data: 1617703223213},
      ]
    }
  }
}

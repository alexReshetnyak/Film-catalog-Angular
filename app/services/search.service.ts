import { Injectable } from '@angular/core';
import { Observable } from  'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SearchService {
  private subject = new Subject();

  sendText(text: string){
    console.log(text, 2);
    this.subject.next(text);
  }
  getText(){
    console.log(2.5);
    return this.subject.asObservable();
  }
}
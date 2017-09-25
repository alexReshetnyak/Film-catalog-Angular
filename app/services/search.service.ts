import { Injectable } from '@angular/core';
import { Observable } from  'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SearchService {
  private subject = new Subject();

  sendText(text: string){
    this.subject.next(text);
  }
  getText(){
    return this.subject.asObservable();
  }
}
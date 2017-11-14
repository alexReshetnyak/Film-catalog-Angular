import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SearchService {
  private subject = new Subject();
  public searchText = '';

  public setText(text: string): void {
    this.subject.next(text);
    this.searchText = text;
  }

  public getText(): Observable<any> {
    return this.subject.asObservable();
  }
}

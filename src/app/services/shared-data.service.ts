import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private dataSource = new BehaviorSubject<boolean>(true); 
  currentData$ = this.dataSource.asObservable();

  updateData(newData: boolean) {
    this.dataSource.next(newData);
  }
}
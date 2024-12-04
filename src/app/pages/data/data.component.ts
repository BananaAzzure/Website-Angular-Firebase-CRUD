import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { NzTableModule } from 'ng-zorro-antd/table';
import { FirestoreService } from '../../service/firestore.service';
import { CommonModule } from '@angular/common';

interface ItemData {
  username: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [NzTableModule, CommonModule],
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
})
export class DataComponent implements OnInit {
  listOfData$: Observable<ItemData[]> | undefined;

  constructor(private firestore: FirestoreService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.listOfData$ = this.firestore.getCollection<ItemData>('users').pipe(
      map(data => data ?? [])
    );
  }

}

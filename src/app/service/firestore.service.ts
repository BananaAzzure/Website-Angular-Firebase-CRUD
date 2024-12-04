import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: AngularFirestore) { }

  getCollection<T>(collectionName: string): Observable<T[]> {
    return this.firestore.collection<T>(collectionName).valueChanges({ idField: 'id' });
  }

  addDocument<T>(path: string, data: T): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.collection(path).doc(id).set(data);
  }
}

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';

import { Task } from '../../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private ngFirestore: AngularFirestore
  ) { }

  create(task: Task) {
    return this.ngFirestore.collection('tasks').add(task);
  }
}

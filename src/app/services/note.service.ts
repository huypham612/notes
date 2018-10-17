import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Note } from '../models/note';

const NOTES: Note[] = [
  { id: 1, title: 'note1', content: 'testing 1', isDone: false, dateCreated: new Date(), dateUpdated: new Date() },
  { id: 2, title: 'note2', content: 'testing 2', isDone: false, dateCreated: new Date(), dateUpdated: new Date() }
];

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor() { }

  getNotes(): Observable<Note[]> {
    return of(NOTES);
  }

}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tag } from '../models/tag';

const TAGS: Tag[] = [
  { id: 1, title: 'todo', dateCreated: new Date(), dateUpdated: new Date() },
  { id: 2, title: 'list', dateCreated: new Date(), dateUpdated: new Date() }
];

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor() { }

  getTags(): Observable<Tag[]> {
    return of(TAGS);
  }
}

import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful'
import { from } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  constructor() { }

  private client = createClient({
    space: 'kpm4rtljq6j0',
    accessToken: 'sANV-TaOnBH2ZK5HJfWsAgoVNWqQW8cYSo7j__xlmpk'
  })


  getAllPosts() {
    const promise = this.client.getEntries();
    return from(promise)
  }
  getPostById(id: string) {
    const promise = this.client.getEntry(id);
    return from(promise)

  }

}

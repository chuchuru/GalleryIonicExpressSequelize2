import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pictures } from '../interfaces/pictures.interface';

@Injectable({
  providedIn: 'root'
})

export class PictureService {

  endpoint = 'http://localhost:8080/api/pictures';

  constructor(private httpClient: HttpClient) { }

  getPictures(): Observable<any> {
    return this.httpClient.get(this.endpoint);
  }

  uploadPicture(data: FormData): Observable<any> {
    return this.httpClient.post(this.endpoint, data);
  }

  deletePicture(id: number): Observable<any> {
    return this.httpClient.delete(`${this.endpoint}/${id}`);
  }
  updatePicture(id: number, data: Pictures): Observable<any> {
    return this.httpClient.put(`${this.endpoint}/${id}`, data);
  }
}

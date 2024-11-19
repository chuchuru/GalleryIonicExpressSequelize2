import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gallery } from '../interfaces/gallery.interface'; // Asegúrate de tener la interfaz de Gallery

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  endpoint = "http://localhost:8080/api/galleries";  // Endpoint para galerías

  constructor(private httpClient: HttpClient) { }

  // Obtener todas las galerías
  getGalleries(): Observable<Gallery[]> {
    return this.httpClient.get<Gallery[]>(this.endpoint);
  }

  // Buscar galerías por nombre
  searchByName(name: string): Observable<Gallery[]> {
    return this.httpClient.get<Gallery[]>(`${this.endpoint}?name=${name}`);
  }

  // Crear una nueva galería
  addGallery(formData: FormData): Observable<Gallery> {
    return this.httpClient.post<Gallery>(this.endpoint, formData);
  }

  // Obtener una galería por ID
  getGalleryById(id: number): Observable<Gallery> {
    return this.httpClient.get<Gallery>(`${this.endpoint}/${id}`);
  }

  // Actualizar una galería por ID
  editGallery(id: number, gallery: Gallery): Observable<any> {
    return this.httpClient.put(`${this.endpoint}/${id}`, gallery);
  }

  // Eliminar una galería por ID
  deleteGallery(id: number): Observable<any> {
    return this.httpClient.delete(`${this.endpoint}/${id}`);
  }

  // Eliminar todas las galerías
  deleteAllGalleries(): Observable<any> {
    return this.httpClient.delete(`${this.endpoint}`);
  }
}

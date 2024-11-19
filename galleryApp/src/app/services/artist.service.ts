import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Artist } from '../interfaces/artis.interface';


@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  endpoint = "http://localhost:8080/api/artists"

  constructor(private httpClient: HttpClient) { }

  // Obtener todos los artistas
  getArtists(): Observable<Artist[]> {
    return this.httpClient.get<Artist[]>(this.endpoint);
  }

  // Buscar artistas por apellido
  searchByName(name: string): Observable<Artist[]> {
    return this.httpClient.get<Artist[]>(`${this.endpoint}?name=${name}`);
  }

  // Crear un nuevo artista
  addArtist(formData: FormData): Observable<Artist> {
    return this.httpClient.post<Artist>(this.endpoint, formData);
  }

  // Obtener un artista por ID
  getArtistById(id: number): Observable<Artist> {
    return this.httpClient.get<Artist>(`${this.endpoint}/${id}`);
  }

  // Actualizar un artista por ID
  editArtist(id: number, artist: Artist): Observable<any> {
    return this.httpClient.put(`${this.endpoint}/${id}`, artist);
  }

  // Eliminar un artista por ID
  deleteArtist(id: number): Observable<any> {
    return this.httpClient.delete(`${this.endpoint}/${id}`);
  }

  // Eliminar todos los artistas
  deleteAllArtists(): Observable<any> {
    return this.httpClient.delete(`${this.endpoint}`);
  }

}
import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../services/gallery.service'; // Asegúrate de importar el servicio adecuado
import { AlertController } from '@ionic/angular'; // Importamos AlertController

import { Gallery } from '../interfaces/gallery.interface'; // Importamos la interfaz de Gallery

@Component({
  selector: 'app-my-galleries',
  templateUrl: './my-galleries.page.html',
  styleUrls: ['./my-galleries.page.scss'],
})
export class MyGalleriesPage implements OnInit {
  galleries: Gallery[] = [];
  filteredGalleries: Gallery[] = [];
  searchTerm: string = '';

  constructor(private galleryService: GalleryService,
              private alertController: AlertController) { }

  ngOnInit() {
    this.getAllGalleries();
  }

  // Obtener todas las galerías
  getAllGalleries() {
    this.galleryService.getGalleries().subscribe(
      (response) => {
        this.galleries = response;
        this.filteredGalleries = this.galleries;
      },
      (error) => {
        console.error("Error al obtener galerías:", error);
      }
    );
  }

  // Filtrar las galerías según el término de búsqueda
  filterGalleries() {
    this.filteredGalleries = this.searchTerm
      ? this.galleries.filter((g: Gallery) =>
          g.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        )
      : this.galleries;
  }

  // Método para editar una galería
  async editGallery(id: number) {
    const gallery = this.galleries.find(g => g.id === id);
    if (!gallery) return;

    const alert = await this.alertController.create({
      header: 'Modificar Galería',
      inputs: [
        { name: 'name', type: 'text', value: gallery.name, placeholder: 'Nombre de la galería' },
        { name: 'address', type: 'text', value: gallery.address, placeholder: 'Dirección' },
        { name: 'filename', type: 'text', value: gallery.filename, placeholder: 'Archivo de imagen' }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Guardar',
          handler: data => {
            const updatedGallery: Gallery = {
              ...gallery,  // Usar los datos existentes
              name: data.name,
              address: data.address,
              filename: data.filename // Mantener el archivo de imagen si se proporciona
            };
            this.galleryService.editGallery(id, updatedGallery).subscribe(() => {
              this.getAllGalleries(); // Recargar la lista de galerías después de la edición
            });
          }
        }
      ]
    });

    await alert.present();
  }

  // Método de confirmación de eliminación
  async presentConfirm(id: number) {
    const alert = await this.alertController.create({
      header: 'Confirmar Borrado',
      message: '¿Estás seguro de que deseas borrar esta galería?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelado');
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.deleteGallery(id);
          }
        }
      ]
    });
    await alert.present();
  }

  // Método para eliminar una galería
  deleteGallery(id: number) {
    this.galleryService.deleteGallery(id).subscribe(
      (response) => {
        console.log('Galería eliminada:', response);
        this.getAllGalleries(); // Recargar las galerías después de eliminar
      },
      (error) => {
        console.error('Error al eliminar galería:', error);
      }
    );
  }
}
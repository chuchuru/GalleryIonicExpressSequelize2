import { Component } from '@angular/core';
import { GalleryService } from '../services/gallery.service'; 
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-gallery',
  templateUrl: './add-gallery.page.html',
  styleUrls: ['./add-gallery.page.scss'],
})
export class AddGalleryPage {
  gallery: any = {
    name: '',
    address: '',
    file: null,
  };
  selectedImage: File | null = null;

  constructor(
    private galleryService: GalleryService,
    private router: Router,
    private alertController: AlertController
  ) {}

  // Maneja la selección de imagen
  onImageSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedImage = input.files[0];
      console.log('Imagen seleccionada:', this.selectedImage);
    }
  }

  // Envia el formulario con los datos
  async onSubmit() {
    if (!this.gallery.name || !this.gallery.address) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, completa todos los campos del formulario.',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    const formData = new FormData();
    formData.append('name', this.gallery.name);
    formData.append('address', this.gallery.address);

    if (this.selectedImage) {
      formData.append('file', this.selectedImage, this.selectedImage.name);
    }

    // Llama al servicio para enviar el formulario
    this.galleryService.addGallery(formData).subscribe(
      async (response) => {
        const alert = await this.alertController.create({
          header: 'Éxito',
          message: 'La galería ha sido añadida correctamente.',
          buttons: ['OK'],
        });
        await alert.present();
        this.router.navigate(['/my-galleries']); // Redirige a la lista de galerías
      },
      async (error) => {
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'Hubo un error al agregar la galería. Inténtalo de nuevo.',
          buttons: ['OK'],
        });
        await alert.present();
      }
    );
  }
}

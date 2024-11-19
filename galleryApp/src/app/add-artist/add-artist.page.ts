import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { ArtistService } from '../services/artist.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-artist',
  templateUrl: './add-artist.page.html',
  styleUrls: ['./add-artist.page.scss'],
})
export class AddArtistPage {
  artist: any = {
    name: '',
    surnames: '',
    dateBirth: '',
  };
  selectedImage: File | null = null;

  constructor(
    private artistService: ArtistService,
    private router: Router,
    private alertController: AlertController
  ) {}

  // Función que se llama cuando se hace clic en el botón "Seleccionar Imagen"
  async chooseImageSource() {
    const actionSheet = await this.alertController.create({
      header: 'Seleccionar Imagen',
      buttons: [
        {
          text: 'Tomar foto',
          handler: () => this.takePhoto(),
        },
        {
          text: 'Seleccionar desde galería',
          handler: () => this.pickImage(),
        },
      ],
    });
    await actionSheet.present();
  }

  // Tomar una foto con la cámara
  public async takePhoto(): Promise<void> {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });
    this.selectedImage = await this.dataURItoFile(capturedPhoto);
    console.log('Foto tomada:', this.selectedImage);
  }

  // Seleccionar una imagen desde la galería
  public async pickImage(): Promise<void> {
    const pickedImages = await Camera.pickImages({
      limit: 1,
      quality: 100,
    });
    this.selectedImage = await this.dataURItoFile(pickedImages.photos[0]);
    console.log('Imagen seleccionada:', this.selectedImage);
  }

  // Convertir la imagen URI a un archivo
  private async dataURItoFile(capturedPhoto: any): Promise<File> {
    const response = await fetch(capturedPhoto.webPath); // Espera la respuesta
    const blob = await response.blob(); // Espera el blob
    return new File([blob], 'photo.jpg', { type: 'image/jpeg' });
  }

  // Enviar los datos del artista al backend
  async onSubmit() {
    if (!this.artist.name || !this.artist.surnames || !this.artist.dateBirth) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, completa todos los campos del formulario.',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    const formData = new FormData();
    formData.append('name', this.artist.name);
    formData.append('surnames', this.artist.surnames);
    formData.append('dateBirth', this.artist.dateBirth);

    if (this.selectedImage) {
      formData.append('file', this.selectedImage, this.selectedImage.name);
    }

    this.artistService.addArtist(formData).subscribe(
      async (response) => {
        const alert = await this.alertController.create({
          header: 'Éxito',
          message: 'El artista ha sido añadido correctamente.',
          buttons: ['OK'],
        });
        await alert.present();
        this.router.navigate(['/my-artists']);
      },
      async (error) => {
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'Hubo un error al agregar el artista. Inténtalo de nuevo.',
          buttons: ['OK'],
        });
        await alert.present();
      }
    );
  }
}

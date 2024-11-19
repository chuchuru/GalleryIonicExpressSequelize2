import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { PictureService } from '../services/picture.service'; // Asegúrate de que el servicio esté bien implementado
import { ArtistService } from '../services/artist.service';
import { GalleryService } from '../services/gallery.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-pictures',
  templateUrl: './add-pictures.page.html',
  styleUrls: ['./add-pictures.page.scss'],
})
export class AddPicturesPage {
  picture: any = {
    name: '',
    description: '',
    price: 0,
    revalue: false,
    certified: false,
    artistId: null,
    galleryId: null,
  };
  selectedImage: File | null = null;
  artists: any[] = []; // Aseguramos que sea un arreglo vacío por defecto
  galleries: any[] = []; // Aseguramos que sea un arreglo vacío por defecto

  constructor(
    private pictureService: PictureService,
    private artistService: ArtistService,
    private galleryService: GalleryService,
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

  // Obtener artistas y galerías cuando se carga el componente
  async ngOnInit() {
    // Asegúrate de que los datos sean un arreglo vacío si no se encuentra nada
    this.artists = (await this.artistService.getArtists().toPromise()) || [];
    this.galleries = (await this.galleryService.getGalleries().toPromise()) || [];
  }

  // Enviar los datos de la imagen al backend
  async onSubmit() {
    if (
      !this.picture.name ||
      !this.picture.description ||
      !this.picture.price ||
      !this.picture.artistId ||
      !this.picture.galleryId
    ) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, completa todos los campos del formulario.',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    const formData = new FormData();
    formData.append('name', this.picture.name);
    formData.append('description', this.picture.description);
    formData.append('price', this.picture.price.toString());
    formData.append('revalue', this.picture.revalue ? 'true' : 'false');
    formData.append('certified', this.picture.certified ? 'true' : 'false');
    formData.append('artistId', this.picture.artistId.toString());
    formData.append('galleryId', this.picture.galleryId.toString());

    if (this.selectedImage) {
      formData.append('file', this.selectedImage, this.selectedImage.name);
    }

    this.pictureService.uploadPicture(formData).subscribe(
      async (response) => {
        const alert = await this.alertController.create({
          header: 'Éxito',
          message: 'La obra ha sido añadida correctamente.',
          buttons: ['OK'],
        });
        await alert.present();
        this.router.navigate(['/my-pictures']);
      },
      async (error) => {
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'Hubo un error al añadir la obra. Inténtalo de nuevo.',
          buttons: ['OK'],
        });
        await alert.present();
        console.error('Error al guardar la obra:', error);
      }
    );
  }
}

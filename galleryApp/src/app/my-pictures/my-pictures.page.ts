import { Component, OnInit } from '@angular/core';
import { PictureService } from '../services/picture.service';
import { AlertController } from '@ionic/angular'; 
import { Pictures } from '../interfaces/pictures.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-pictures',
  templateUrl: './my-pictures.page.html',
  styleUrls: ['./my-pictures.page.scss'],
})
export class MyPicturesPage implements OnInit {
  pictures: Pictures[] = []; 
  filteredPictures: Pictures[] = []; 
  searchTerm: string = '';

  constructor(
    private pictureService: PictureService,
    private alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllPictures();
  }

  getAllPictures() {
  this.pictureService.getPictures().subscribe(
    (response) => {
      this.pictures = response;  // No necesitamos modificar nada aquí si ya viene la URL completa
      this.filteredPictures = this.pictures;  // Filtrado igual que en galerías
    },
    (error) => {
      console.error("Error al obtener imágenes:", error);
    }
  );
}

  filterPictures() {
    // Filtra las imágenes según el término de búsqueda
    this.filteredPictures = this.searchTerm
      ? this.pictures.filter((b: Pictures) => 
          b.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        )
      : this.pictures; 
  }

  async editPicture(id: number | undefined) {
    if (id === undefined) {
      console.error("El ID de la pintura no es válido");
      return;
    }
  
    const picture = this.pictures.find(p => p.id === id);
    if (!picture) return;

    const isConfirmed = await this.presentConfirmEdit();
    if (!isConfirmed) return; // Si el usuario cancela, no hacer nada

    const alert = await this.alertController.create({
      header: 'Modificar Obra de Arte',
      inputs: [
        { name: 'name', type: 'text', value: picture.name, placeholder: 'Nombre de la obra' },
        { name: 'description', type: 'text', value: picture.description, placeholder: 'Descripción' },
        { name: 'revalue', type: 'text', value: picture.revalue, placeholder: 'Revalorización' },
        { name: 'price', type: 'text', value: picture.price, placeholder: 'Precio' },
        { name: 'filename', type: 'text', value: picture.filename, placeholder: 'Archivo de imagen' },
        {
          name: 'certified',
          type: 'checkbox',
          label: 'Certificada',
          checked: picture.certified
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Guardar',
          handler: data => {
            const updatedPicture: Pictures = {
              ...picture,  // Usar los datos existentes
              name: data.name,
              description: data.description,
              revalue: data.revalue,
              price: data.price,
              filename: data.filename,
              certified: data.certified  // Actualizamos el valor del campo 'certified' basado en el checkbox
            };
            this.pictureService.updatePicture(Number(id), updatedPicture).subscribe(
              () => {
                this.getAllPictures(); // Recargar las pinturas después de la actualización
              },
              (error) => {
                console.error('Error al actualizar la pintura', error);
              }
            );
          }
        }
      ]
    });
  
    await alert.present();
  }

  async presentConfirmEdit(): Promise<boolean> {
    const alert = await this.alertController.create({
      header: 'Confirmar Modificación',
      message: '¿Estás seguro de que deseas guardar los cambios?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Modificación cancelada');
            return false;  // No realiza la actualización
          }
        },
        {
          text: 'Confirmar',
          handler: () => {
            console.log('Modificación confirmada');
            return true;  // Confirma la actualización
          }
        }
      ]
    });
    await alert.present();
    return new Promise((resolve) => {
      alert.onDidDismiss().then(() => {
        resolve(alert.role === 'confirm');
      });
    });
  }
 // Método de confirmación de eliminación
 async presentConfirm(id: number) {
  const alert = await this.alertController.create({
    header: 'Confirmar Eliminación',
    message: '¿Estás seguro de que deseas borrar esta pintura?',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
      },
      {
        text: 'Eliminar',
        handler: () => {
          this.deletePicture(id); // Eliminar la pintura
        }
      }
    ]
  });
  await alert.present();
}

// Método para eliminar la pintura
deletePicture(id: number) {
  this.pictureService.deletePicture(id).subscribe(
    (response) => {
      console.log('Pintura eliminada:', response);
      this.getAllPictures(); // Recargar la lista de pinturas después de eliminar
    },
    (error) => {
      console.error('Error al eliminar pintura:', error);
    }
  );
}


  goToAddPicture() {
    this.router.navigate(['/add-picture']);
  }

  
}

import { Component, OnInit, inject } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonFab,
  IonFabButton,
  IonIcon,
  IonButton,
  AlertController,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { camera, trash } from 'ionicons/icons';
import { PhotoService } from '../services/photo-service';
import { UserPhoto } from '../services/photo-service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonFab, IonFabButton, IonIcon, IonButton],
})
export class Tab2Page implements OnInit {

  public photoService = inject(PhotoService);
  private alertController = inject(AlertController);

  constructor() {
    addIcons({ camera, trash });
  }

  async ngOnInit() {
    await this.photoService.loadSaved();
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  async deletePhoto(photo: UserPhoto, position: number) {
    const alert = await this.alertController.create({
      header: 'Eliminar foto',
      message: '¿Estás seguro de que quieres eliminar esta foto?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: () => {
            this.photoService.deletePicture(photo, position);
          },
        },
      ],
    });

    await alert.present();
  }
}
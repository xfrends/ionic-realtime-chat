import { Component, OnInit, Input } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ContentService } from 'src/app/shared/api/content.service';

@Component({
  selector: 'app-add-group-modal',
  templateUrl: './add-group-modal.component.html',
  styleUrls: ['./add-group-modal.component.scss'],
})
export class AddGroupModalComponent implements OnInit {
  @Input() contacts: any[];
  handlerMessage = '';
  roleMessage = '';
  constructor(
    private modalCtrl: ModalController,
    private router: Router,
    private alertController: AlertController,
    private contentService: ContentService
  ) { }

  ngOnInit() { }

  async createGroup() {
    const alert = await this.alertController.create({
      header: 'Group Information',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'masukan nama group disini'
        },
        {
          name: 'desc',
          type: 'textarea',
          placeholder: 'masukan deskripsi group disini'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Create Group Canceled';
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: data => {
            this.storeGroup(data);
            this.handlerMessage = 'Create Group Confirmed';
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }

  storeGroup(data) {
    const participant = [];
    this.contacts.forEach(element => {
      if (element.is_checked) {
        participant.push(element.other_user_id);
      }
    });

    this.contentService.getToken().then((token) => {
      this.contentService.postGroup(token, data.name, data.desc, participant).subscribe(
        (response) => {
          console.log(response);
          this.modalCtrl.dismiss();
          this.router.navigate(['tabs/group']);
        },
        (error) => {
          console.log('error: ', error);
          if (error.status === 401) {
            this.contentService.deleteToken();
            this.router.navigate(['/login']);
          }
        }
      );
    });
  }
}

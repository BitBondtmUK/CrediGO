import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  constructor(public actionSheetController: ActionSheetController, public router: Router) { }

  ngOnInit() {
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      buttons: [
        {
          text: 'Transferir',
          icon: 'heart',
          handler: () => {
            this.router.navigate(['/con-chosen']);
          }
        },{
        text: 'Cancel',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }
      ]
    });
    await actionSheet.present();
  }


}

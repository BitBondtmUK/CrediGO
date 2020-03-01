import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FirebaseService } from '../../services/firebase.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.page.html',
  styleUrls: ['./new-post.page.scss'],
})
export class NewPostPage implements OnInit {

  validations_form: FormGroup;
  image: any;
  url: any;
  img: any;


  constructor(
    private modalController: ModalController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public router: Router,
    private formBuilder: FormBuilder,
    private firebaseService: FirebaseService,
    ) { }

  ngOnInit() {
   this.resetFields();
  }

  resetFields(){
    this.image = "";
    this.validations_form = this.formBuilder.group({
      description: new FormControl('', Validators.required),
    });
  }

  onSubmit(value){
    let data = {
      description: value.description,
      image: this.image
    }
    this.firebaseService.createTask(data)
    .then(
      res => {
        this.router.navigate(["/home/user/app/tab1"]);
      }
    )
  }

  async uploadImageToFirebase(image){
    const loading = await this.loadingCtrl.create({
      message: 'Subiendo imagen...'
    });
    const toast = await this.toastCtrl.create({
      message: 'La imagen se subio correctamente',
      duration: 3000
    });
    this.presentLoading(loading);
    //let image_src = this.webview.convertFileSrc(image);
    let randomId = Math.random().toString(36).substr(2, 5);

    //uploads img to firebase storage
    this.firebaseService.uploadImage(image, randomId)
    .then(photoURL => {
      this.image = photoURL;
      loading.dismiss();
      toast.present();
      this.img = 1;
    }, err =>{
      console.log(err);
    })
  }

  async presentLoading(loading) {
    return await loading.present();
  }

  async closeModal() {
    await this.modalController.dismiss();
  }
  

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event: Event) => { // called once readAsDataURL is completed
        this.url = reader.result;
        this.image = this.url;
        this.uploadImageToFirebase(this.image)
      }
    }
  }

}

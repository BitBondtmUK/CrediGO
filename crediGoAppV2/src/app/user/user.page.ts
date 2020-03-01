import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  validations_form: FormGroup;

  constructor(private firebaseService: FirebaseService, public router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.resetFields();
  }

  resetFields(){
    this.validations_form = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      last: new FormControl('', Validators.required)
    });
  }

  onSubmitInfoUser(value){
    let data = {
      name: value.name,
      last: value.last,
    }
    this.firebaseService.createUserInfo(data)
    .then(
      res => {
        this.router.navigate(["/home/user/app/tab1"]);
      }
    )
  }

}

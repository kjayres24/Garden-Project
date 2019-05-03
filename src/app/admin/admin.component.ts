import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  exampleChild: boolean = false;

  loginForm: FormGroup;
  loginInfo = [];
  isSubmitted = false;
  // deleteBtn = false;


  constructor(private fb: FormBuilder, private aService: AdminService, private router: Router) {

  }

  ngOnInit() {
    console.log(this.aService.x)
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
    // console.log(this.loginForm.value.email);

    // this.findBooks();
  }

  get formControls() { return this.loginForm.controls; }

  login() {
    console.log('wassup');
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    // console.log(this.loginForm.value.email);
    if(this.loginForm.invalid){
      this.aService.x = false;
      return;
    }
    if(this.loginForm.value.email === 'twest@gmail.com' && this.loginForm.value.password === 'test'){
      this.aService.x = true;
    }
    // this.deleteBtn = true;
    // this.aService.login(this.loginForm.value);
    this.router.navigateByUrl('/products');
  }

}

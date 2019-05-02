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

  loginForm: FormGroup;
  loginInfo = [];
  isSubmitted = false;


  constructor(private fb: FormBuilder, private aService: AdminService, private router: Router) {

  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })

    // this.findBooks();
  }

  get formControls() { return this.loginForm.controls; }

  login() {
    console.log('wassup');
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }
    // this.aService.login(this.loginForm.value);
    this.router.navigateByUrl('/products');
  }

}

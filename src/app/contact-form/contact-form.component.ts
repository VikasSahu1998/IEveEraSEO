import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  ContantUsForm!: FormGroup | any;

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.ContantUsForm = new FormGroup({
      name: new FormControl('', [Validators.required,]),
      email: new FormControl('', [Validators.required, Validators.email]),
      PhoneNumber: new FormControl('', [Validators.required,]),
      msg: new FormControl('', [Validators.required,]),
    },);
  }

  Onsubmit() {
    // if (this.ContantUsForm.valid)
    //     .subscribe({
    //       next: (res) => {
    //        alert("data added");
    //         this.ContantUsForm.reset();
    //       },
    //       error: () => {
    //         alert("data error");
    //       }
    //     })

    console.log('Your form data : ', this.ContantUsForm.value );
      }
  }


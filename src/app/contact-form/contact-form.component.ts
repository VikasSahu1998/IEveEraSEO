import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { ApiService } from '../Service/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  ContantUsForm!: FormGroup | any;

  constructor(private formbuilder: FormBuilder,private api: ApiService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.ContantUsForm = new FormGroup({
      name: new FormControl('', [Validators.required,]),
      email: new FormControl('', [Validators.required, Validators.email]),
      PhoneNumber: new FormControl('', [Validators.required,]),
      msg: new FormControl('', [Validators.required,]),
    },);
  }

  // Onsubmit() {
  //   if (this.ContantUsForm.valid)
  //       .subscribe({
  //         next: (res) => {
  //          alert("data added");
  //           this.ContantUsForm.reset();
  //         },
  //         error: () => {
  //           alert("data error");
  //         }
  //       })

  //   console.log('Your form data : ', this.ContantUsForm.value );
  //     }

      Onsubmit(){
        if(this.ContantUsForm.valid){
          this.api.postContantUsForm(this.ContantUsForm.value)
          .subscribe({
            next:(res)=>{
              this.toastr.success('details added successfully', 'successfully', { timeOut: 2000, });
              console.log("feedback redodeed");
              this.ContantUsForm.reset();
             },
             error: () => {
              this.toastr.error('error while adding  the data', 'error', { timeOut: 2000, });
             }
          })
        }
      }
  }


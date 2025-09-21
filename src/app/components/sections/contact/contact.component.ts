import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MainHeadingComponent } from "../../../shared/components/main-heading/main-heading.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { HotToastService } from '@ngneat/hot-toast';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from "../../../shared/components/loader/loader.component";
import { SpinnerComponent } from "../../../shared/components/spinner/spinner.component";
import { GoogleMapComponent } from "../../../shared/components/google-map/google-map.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    MainHeadingComponent,
    CommonModule,
    ReactiveFormsModule,
    SpinnerComponent,
    GoogleMapComponent
],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {

  contactForm: FormGroup;
  loader: boolean = false;

  constructor(private fb: FormBuilder, private toastr: HotToastService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    this.contactForm.markAllAsTouched();


    if (this.contactForm.valid) {
      this.sendEmail();
    } else {
      this.toastr.warning('Please fill all required fields correctly');
    }
  }


  sendEmail() {
    this.loader = false;
    const emailParams = {
      name: this.contactForm.get('name')?.value,
      email: this.contactForm.get('email')?.value,
      message: this.contactForm.get('message')?.value
    };

    emailjs.send('service_5oop32x', 'template_csy2it6', emailParams, 'VIs_czPuzxr-5Lw-A')
      .then((result: EmailJSResponseStatus) => {

        this.loader = false;
        this.toastr.success('Email Sent Successfully');
        this.contactForm.reset();
      }, (error: any) => {
        this.loader = false
        this.toastr.error('Email Sent Failed');
      });
  }

}

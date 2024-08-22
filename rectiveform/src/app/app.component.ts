import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rectiveform';
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
  });
  submitted = false;

  constructor(private formbuilder: FormBuilder) {}
  ngOnInit(): void {
    this.form = this.formbuilder.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(15),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }
}

// import { Component, OnInit } from '@angular/core';
// import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent implements OnInit {
//   title = 'reactiveform';

//   form: FormGroup;
//   submitted = false;

//   constructor(private formBuilder: FormBuilder) {}

//   ngOnInit(): void {
//     this.form = this.formBuilder.group({
//       username: [
//         '',
//         [
//           Validators.required,
//           Validators.minLength(6),
//           Validators.maxLength(15)
//         ]
//       ],
//       email: [
//         '',
//         [
//           Validators.required,
//           Validators.email
//         ]
//       ]
//     });
//   }

//   get f(): { [key: string]: AbstractControl } {
//     return this.form.controls;
//   }

//   onSubmit(): void {
//     this.submitted = true;
//     if (this.form.invalid) {
//       return;
//     }

//     console.log(JSON.stringify(this.form.value, null, 2));
//   }
// }

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  userForm : FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    
    this.userForm = this._fb.group({
      firstname:['', [Validators.required, Validators.minLength(5)]],
      lastname:['', [Validators.required, Validators.minLength(5)]],
      email:['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      notification: ''
    });
  }       
    saveUser() {
      console.log(this.userForm.value);
    }
    populateFormValues()
    {
      this.userForm.patchValue({
        firstname : 'User firstname',
        lastname : 'User lastname'
      });
    }
    validateEmail() {
      let emailControl = this.userForm.get('email');
      emailControl.setValidators([Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]);
      emailControl.updateValueAndValidity();
    }
  
}

import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'create-edit-user',
  imports: [
    MatDialogActions,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
     MatDialogModule,
  ],
  templateUrl: './create-edit-user.html',
  styleUrl: './create-edit-user.css'
})
export class CreateEditUser {
  form: FormGroup;
  isEdit = false;

  constructor(
    private bulder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any 
  ) {
    this.form = this.bulder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

    if (data) {
      this.form.patchValue(data); 
    }
  }
}

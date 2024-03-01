import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html',
})
export class SwitchesPageComponent implements OnInit {

  public myForm: FormGroup = this.fb.group({
    gender: ['M', Validators. required ],
    wantsNotifications: [ true, Validators.required ],
    termsAndConditions: [ false, Validators.requiredTrue ],
  })

  public person = {
    gender: 'F',
    wantsNotifications: false,
  }

  constructor( private fb: FormBuilder ) {}

  ngOnInit(): void {
    this.myForm.reset( this.person )
  }

  isValidField( field: string ): boolean | null {
    return this.myForm.controls[field].errors
    && this.myForm.controls[field].touched;
  }

  //ngSubmit
  onSave() {
    if ( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return;
    }

    // Queremos asignar los valores del this.myForm a this.person excepto termsAndConditions.
    // Para eliminar esta propiedad, se utiliza
    // la desestructuración de objetos de la siguiente manera:

    // const { termsAndConditions, ...newPerson } = this.myForm.value;

    // así se elimina la propiedad de termsAndConditions del this.myForm.value y el resultado se asigna en una copia
    // llamada newPerson

    // Luego asignas newPerson a this.person para que tenga esa estructura nueva ( sin el termsAndConditions )

    // this.person = newPerson;
    console.log(this.myForm.value);
    console.log(this.person);

  }

}

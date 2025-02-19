import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PersonService } from '../../services/person.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-person-page',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-person-page.component.html',
  styleUrl: './create-person-page.component.css',
})
export class CreatePersonPageComponent {
  personForm = new FormGroup({
    name: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
  });

  personService = inject(PersonService);
  router = inject(Router);

  createPerson() {
    console.log(this.personForm.value)
    if (this.personForm.valid) {
      this.personService.addPerson(this.personForm.value).subscribe((data) => {
        this.router.navigate(['/home']);
      },
      (error) => console.log('Create Person values invalid, please try again')
    );
    }else{
      console.log('Complete you form informations')
    }
  }
}

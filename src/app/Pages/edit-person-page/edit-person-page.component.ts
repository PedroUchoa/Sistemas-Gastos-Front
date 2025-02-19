import { PersonService } from './../../services/person.service';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IPersons } from '../../interfaces/IPersons.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-person-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-person-page.component.html',
  styleUrl: './edit-person-page.component.css',
})
export class EditPersonPageComponent implements OnInit{
  personForm = new FormGroup({
    name: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
  });

  person: IPersons = {
    id: '',
    name: '',
    age: 0,
    transactions: [],
  };

  personService = inject(PersonService);
  router = inject(Router);

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) =>{
      this.person.id = params['id']
      this.person.name = params['name']
      this.person.age = params['age']
    })
    this.personForm.controls['name'].setValue(this.person.name);
    this.personForm.controls['age'].setValue(`${this.person.age}`);
  }

  editPerson() {
    if(this.personForm.valid){
      this.personService.editPerson(this.person.id,this.personForm.value).subscribe({
        next:() =>{
          this.router.navigate(['/home'])
        }
      })
    }
  }
}

import { IPersons } from './../../interfaces/IPersons.interface';
import { Component, inject, signal } from '@angular/core';
import { ListItemComponent } from '../../Components/list-item/list-item.component';
import { PersonService } from '../../services/person.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ListItemComponent,RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  personService = inject(PersonService);
  arrayPersons: IPersons[] = [];

  ngOnInit(): void {
    this.getPersons();
  }

  getPersons() {
    this.personService.getPersons(0, 0).subscribe((res) => {
      this.arrayPersons = res.content;
    });
  }

  handleDelete(id: string){
    this.personService.removePerson(id).subscribe({
      next: () =>{
        this.arrayPersons = this.arrayPersons.filter((item) => item.id != id)
      }
    })
  }

}

import { Component, inject, signal } from '@angular/core';
import { ListItemComponent } from "../../Components/list-item/list-item.component";
import { PersonService } from '../../services/person.service';
import { IPersons } from '../../interfaces/IPersons.interface';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ListItemComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  personService = inject(PersonService);
  arrayPersons = signal<IPersons[] | null>(null);

  ngOnInit():void{
    this.getPersons();
  }

getPersons(){
  this.personService.getPersons(0,0).subscribe((res)=>{
    this.arrayPersons.set(res.content);
  })
}

}

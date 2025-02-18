import { Component, Input } from '@angular/core';
import { IPersons } from '../../interfaces/IPersons.interface';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.css'
})
export class ListItemComponent {

  @Input() person: IPersons = {
    id: '',
    name: '',
    age: 0,
    transactions: []
  }

}

import { Component, EventEmitter, inject, Input, output, Output } from '@angular/core';
import { IPersons } from '../../interfaces/IPersons.interface';


@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.css',
})
export class ListItemComponent {
  @Output() delete = new EventEmitter<string>();

  @Input() person: IPersons = {
    id: '',
    name: '',
    age: 0,
    transactions: [],
  };

  deletePerson() {
    this.delete.emit(this.person.id);
  }



}

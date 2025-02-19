import { Component, inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TransactionService } from '../../services/transaction.service';


@Component({
  selector: 'app-create-transaction-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-transaction-page.component.html',
  styleUrl: './create-transaction-page.component.css',
})
export class CreateTransactionPageComponent implements OnInit {
  personForm = new FormGroup({
    description: new FormControl('', Validators.required),
    value: new FormControl('', Validators.required),
    type: new FormControl('INCOME', Validators.required),
    idPerson: new FormControl(''),
  });

  transactionService = inject(TransactionService);
  router = inject(Router);

  personId: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.personForm.controls['idPerson'].setValue(params['id']);
    });
  }

  createTransaction() {
    if (this.personForm.valid) {
      this.transactionService.createTransaction(this.personForm.value).subscribe(() => {
        this.router.navigate(['/home']);
      });
    }
  }
}

import { Component, OnInit, Input } from '@angular/core';

import { Expense } from '../../Expense';
import { Router, ActivatedRoute } from '@angular/router';
import { UpdateService } from 'src/app/shared/update-service/update.service';

@Component({
  selector: 'app-list-standard',
  templateUrl: './list-standard.component.html',
  styleUrls: ['./list-standard.component.css']
})
export class ListStandardComponent implements OnInit {

  @Input() expenseList: Expense[];
  expense: Expense;

  constructor(private update: UpdateService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }


  onEdit(selectedExpense) {
    this.update.getId(selectedExpense.expenseId);
    switch(selectedExpense.expenseType) {
      case 'Despesa corrente fixa':
        this.router.navigate(['../alterar-despesa/fixa'], { relativeTo: this.route });
        break;
        case 'Despesa corrente variável':
          this.router.navigate(['../alterar-despesa/variavel'], { relativeTo: this.route });
        break;
        case 'Despesa não corrente de curta duração':
          this.router.navigate(['../alterar-despesa/curta'], { relativeTo: this.route });
        break;
        case 'Despesa não corrente de longa duração':
          this.router.navigate(['../alterar-despesa/longa'], { relativeTo: this.route });
        break;
    }
    
  }

  onView(selectedExpense) {
    
  }

}

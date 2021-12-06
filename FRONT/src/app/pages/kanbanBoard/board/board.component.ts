import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { KanbanService } from 'src/app/core/service/kanban.service';
import { Card } from 'src/app/shared/models/card.model';
import { PagesService } from '../../pages.service';
import { NewCardModalComponent } from './new-card-modal/new-card-modal.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  cards!: Card[];
  toDoCards!: Card[];
  doingCards!: Card[];
  doneCards!: Card[];

  constructor(
    private kanbanService: KanbanService,
    public dialog: MatDialog,
    private pagesService: PagesService
  ) {}

  getCard(): void {
    this.kanbanService.getCard().subscribe(
      (cards: Card[]) => {
        this.toDoCards = cards.filter((card: Card) => card.lista === 'ToDo');
        console.log(this.toDoCards);
        this.doingCards = cards.filter((card: Card) => card.lista === 'Doing');
        console.log(this.doingCards);
        this.doneCards = cards.filter((card: Card) => card.lista === 'Done');
        console.log(this.doneCards);
      },
      (error) => {
        console.log(error);
        this.pagesService.openSuccessSnackBar('Erro ao buscar os cards!');
      }
    );
  }

  addNewCard(): void {
    const dialogRef = this.dialog.open(NewCardModalComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getCard();
    });
  }

  ngOnInit(): void {
    this.getCard();

    this.kanbanService.cardListChanged.subscribe(() => {
      this.getCard();
    });
  }
}

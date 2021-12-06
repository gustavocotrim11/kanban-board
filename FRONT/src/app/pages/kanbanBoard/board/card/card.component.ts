import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { KanbanService } from 'src/app/core/service/kanban.service';
import { PagesService } from 'src/app/pages/pages.service';
import { Card } from 'src/app/shared/models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  public cardForm!: FormGroup;

  isEditMode!: boolean;

  @Input() card!: Card;
  @Input() board!: string;
  @Input() valueProgress!: string;

  constructor(
    private fb: FormBuilder,
    private kanbanService: KanbanService,
    private pagesService: PagesService
  ) {}

  ngOnInit(): void {}

  openEditMode(): void {
    this.cardForm = this.fb.group({
      titulo: [this.card.titulo, [Validators.required]],
      conteudo: [this.card.conteudo, [Validators.required]],
    });
    this.isEditMode = true;
  }

  cancel(): void {
    this.isEditMode = false;
  }

  editCard(): void {
    let cardEdited = this.card;
    cardEdited.titulo = this.cardForm.value.titulo;
    cardEdited.conteudo = this.cardForm.value.conteudo;
    this.kanbanService.putCard(cardEdited).subscribe(
      (result) => {
        this.kanbanService.cardListChanged.next(result);
        this.isEditMode = false;
        this.pagesService.openSuccessSnackBar('Sucesso ao editar o card!');
      },
      (error) => {
        console.log(error);
        this.pagesService.openFailureSnackBar('Error ao editar o card...');
      }
    );
  }

  deleteCard(): void {
    if (this.card.id) {
      this.kanbanService.deleteCard(this.card.id).subscribe(
        (result) => {
          this.kanbanService.cardListChanged.next(result);
          this.pagesService.openSuccessSnackBar('Sucesso ao deletar o card!');
        },
        (error) => {
          console.log(error);
          this.pagesService.openFailureSnackBar('Error ao deletar o card...');
        }
      );
    }
  }

  setCardToBeforeBoard(): void {
    const beforeList = this.board === 'Doing' ? 'ToDo' : 'Doing';
    const cardMoved = this.card;
    cardMoved.lista = beforeList;
    this.kanbanService.putCard(cardMoved).subscribe(
      (result) => {
        this.kanbanService.cardListChanged.next(result);
        this.pagesService.openSuccessSnackBar('Sucesso ao mover o card!');
      },
      (error) => {
        console.log(error);
        this.pagesService.openFailureSnackBar('Error ao mover o card...');
      }
    );
  }

  setCardToNextBoard(): void {
    const beforeList = this.board === 'ToDo' ? 'Doing' : 'Done';
    const cardMoved = this.card;
    cardMoved.lista = beforeList;
    this.kanbanService.putCard(cardMoved).subscribe(
      (result) => {
        this.kanbanService.cardListChanged.next(result);
        this.pagesService.openSuccessSnackBar('Sucesso ao mover o card!');
      },
      (error) => {
        console.log(error);
        this.pagesService.openFailureSnackBar('Error ao mover o card...');
      }
    );
  }
}

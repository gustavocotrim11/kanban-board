import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { KanbanService } from 'src/app/core/service/kanban.service';
import { PagesService } from 'src/app/pages/pages.service';

@Component({
  selector: 'app-new-card-modal',
  templateUrl: './new-card-modal.component.html',
  styleUrls: ['./new-card-modal.component.css'],
})
export class NewCardModalComponent implements OnInit {
  public cardForm!: FormGroup;

  constructor(
    private kanbanService: KanbanService,
    private pagesService: PagesService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<NewCardModalComponent>
  ) {}

  ngOnInit(): void {
    this.cardForm = this.fb.group({
      titulo: ['', [Validators.required]],
      conteudo: ['', [Validators.required]],
    });
  }

  createCard(): void {
    const newCard = this.cardForm.value;
    newCard.lista = 'ToDo';
    this.kanbanService.postCard(newCard).subscribe(
      (result) => {
        this.pagesService.openSuccessSnackBar('Sucesso ao criar o card!');
        this.kanbanService.cardListChanged.next(result);
      },
      (error) => {
        console.log(error);
        this.pagesService.openFailureSnackBar('Erro ao criar o card...');
      }
    );
    this.dialogRef.close();
    this.cardForm.reset();
  }

  cancel(): void {
    this.dialogRef.close();
    this.cardForm.reset();
  }
}

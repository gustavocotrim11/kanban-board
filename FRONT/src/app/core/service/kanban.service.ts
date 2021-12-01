import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Card } from 'src/app/shared/models/card.model';

@Injectable({
  providedIn: 'root',
})
export class KanbanService {
  private kanbanUrl = 'http://localhost:5000/cards';

  constructor(private http: HttpClient) {}

  cardListChanged = new Subject();

  postCard(card: Card): Observable<Card> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + token);

    return this.http.post<Card>(this.kanbanUrl, card, { headers: headers });
  }

  getCard(): Observable<Card[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + token);

    return this.http.get<Card[]>(this.kanbanUrl, { headers: headers });
  }

  putCard(card: Card): Observable<Card> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + token);

    return this.http.put<Card>(`${this.kanbanUrl}/${card.id}`, card, {
      headers: headers,
    });
  }

  deleteCard(id: string): Observable<Card[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + token);

    return this.http.delete<Card[]>(`${this.kanbanUrl}/${id}`, {
      headers: headers,
    });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private readonly API_URL = "https://ih-crud-api.herokuapp.com/characters";

  constructor(private http: HttpClient) { }

  getCharacter(): Observable<any> {
    return this.http.get<any>(this.API_URL);
  }
  deleteCharacter(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/${id}`);
  }
  postCharacter(body: any): Observable<any> {
    return this.http.post<any>(this.API_URL, body);
  }
  putCharacter(id: number, body: any): Observable<any> {
    return this.http.put<any>(`${this.API_URL}/${id}`, body);
  }
  getCharacterById(id: number): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/${id}`);
  }
}

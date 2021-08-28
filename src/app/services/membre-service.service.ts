import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Membre } from '../store/models/membres/membre';
import { MembreParameter } from '../store/models/membres/membre-parameter';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { MembreReponse } from '../store/models/membres/membre-reponse';

@Injectable({
  providedIn: 'root'
})
export class MembreServiceService {

  constructor(private httpClient: HttpClient) { }
   members: Membre[] = [
    {
      id: '1',
      firstName: 'Nikolai',
      lastName: 'Uvarov',
    } as Membre,
    {
      id: '2',
      firstName: 'John',
      lastName: 'Conor',
    } as Membre,
    {
      id: '3',
      firstName: 'Olya',
      lastName: 'Bytsenko',
    } as Membre,
    {
      id: '4',
      firstName: 'Vasya',
      lastName: 'Pupkin',
    } as Membre,
    {
      id: '5',
      firstName: 'Ivan',
      lastName: 'Grozniy',
    } as Membre,
    {
      id: '6',
      firstName: 'Svet',
      lastName: 'Svetoslav',
    } as Membre,
    ,
    {
      id: '7',
      firstName: 'Alex',
      lastName: 'Great',
    } as Membre,
    {
      id: '8',
      firstName: 'Kolya',
      lastName: 'Smith',
    } as Membre,
    {
      id: '9',
      firstName: 'Tolya',
      lastName: 'Alikov',
    } as Membre
  ] as Membre[];

  public getMembres(params: MembreParameter): Observable<MembreReponse> {
    debugger
    // return this.httpClient.post<Customer[]>("localhost:4200/customers", params);
    return of(this.getFakeMembres(params)).pipe(delay(3000));
  }
  private getFakeMembres(params: MembreParameter): MembreReponse {
    let data: Membre[];

    // tslint:disable-next-line:no-bitwise
    data = this.members.filter(c => ~(c.firstName.toLocaleLowerCase()).indexOf(params.filter)
      // tslint:disable-next-line:no-bitwise
      || ~(c.lastName.toLocaleLowerCase()).indexOf(params.filter));

    data.sort((a, b) => (a[params.sortField] > b[params.sortField] ? 1 : -1) * (params.sortDirection === 'asc' ? 1 : -1));

    return {
      total: data.length,
      membres: data.slice((params.pageIndex) * params.pageSize, (params.pageIndex + 1) * params.pageSize)
    };
  }
}

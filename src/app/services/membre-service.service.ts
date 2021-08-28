import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
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

  public getCustomers(params: MembreParameter): Observable<MembreReponse> {
    // return this.httpClient.post<Customer[]>("localhost:4200/customers", params);
    return of(this.getFakeCustomers(params)).pipe(delay(3000));
  }
  private getFakeCustomers(params: MembreParameter): MembreReponse {
    let data = <Membre[]>[];

    data = membre.filter(c => ~(c.role.toLocaleLowerCase()).indexOf(params.filter)
      // tslint:disable-next-line:no-bitwise
      || ~(c.firstName.toLocaleLowerCase()).indexOf(params.filter)
      // tslint:disable-next-line:no-bitwise
      || ~(c.lastName.toLocaleLowerCase()).indexOf(params.filter));

    data.sort((a, b) => (a[params.sortField] > b[params.sortField] ? 1 : -1) * (params.sortDirection === "asc" ? 1 : -1));

    return {
      total: data.length,
      membres: data.slice((params.pageIndex) * params.pageSize, (params.pageIndex + 1) * params.pageSize)
    };
  }
  const members = <Membre[]>[
    <Membre>{
      id: "1",
      firstName: "Nikolai",
      lastName: "Uvarov",
    },
    <Membre>{
      id: "2",
      firstName: "John",
      lastName: "Conor",
    },
    <Membre>{
      id: "3",
      firstName: "Olya",
      lastName: "Bytsenko",
    },
    <Membre>{
      amount: 100,
      firstName: "Vasya",
      lastName: "Pupkin",
    },
    <Membre>{
      id: "5",
      firstName: "Ivan",
      lastName: "Grozniy",
    },
    <Membre>{
      id: "6",
      firstName: "Svet",
      lastName: "Svetoslav",
    },
    ,
    <Membre>{
      id: "7",
      firstName: "Alex",
      lastName: "Great",
    },
    <Membre>{
      id: "8",
      firstName: "Kolya",
      lastName: "Smith",
    },
    <Membre>{
      id: "9",
      firstName: "Tolya",
      lastName: "Alikov",
    }
  ];
}

import { Component, OnInit, ViewChild, ElementRef, OnDestroy, AfterViewInit } from '@angular/core';
import { Membre } from '../../store/models/membres/membre';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store, select } from '@ngrx/store';
import { selectAllMembre, selectMembreTotal, selectMembreError, selectMembreLoading } from '../../store/selectors/membre.selectors';
import { MembreParameter } from '../../store/models/membres/membre-parameter';
import { MatPaginator } from '@angular/material/paginator';
import { Observable, merge, Subject, Subscription } from 'rxjs';
import { tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import {AppState} from '../../store';
import {MembreLoadAction} from '../../store/actions/membre-action.actions';

@Component({
  selector: 'app-membre-table',
  templateUrl: './membre-table.component.html',
  styleUrls: ['./membre-table.component.css']
})
export class MembreTableComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  public displayedColumns: string[] = ['id',  'firstName', 'lastName'];
  public dataSource: MatTableDataSource<Membre>;
  public membreTotal: number;
  public noData: Membre[] = [ {} as Membre];
  public loading: boolean;
  public error$: Observable<boolean>;
  public filterSubject = new Subject<string>();
  public defaultSort: Sort = { active: 'firstName', direction: 'asc' };

  private filter = '';
  private subscription: Subscription = new Subscription();

  constructor(public store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.pipe(select(selectAllMembre)).subscribe(membres => this.initializeData(membres));
    this.store.pipe(select(selectMembreTotal)).subscribe(total => this.membreTotal = total);
    this.subscription.add(this.store.pipe(select(selectMembreLoading)).subscribe(loading => {
      if (loading) {
        this.dataSource = new MatTableDataSource(this.noData);
      }
      this.loading = loading;
    }));
    this.error$ = this.store.pipe(select(selectMembreError));
  }
  public ngAfterViewInit(): void {
    this.loadMembres();
    const filter$ = this.filterSubject.pipe(
      debounceTime(150),
      distinctUntilChanged(),
      tap((value: string) => {
        this.paginator.pageIndex = 0;
        this.filter = value;
      })
    );

    const sort$ = this.sort.sortChange.pipe(tap(() => this.paginator.pageIndex = 0));

    this.subscription.add(merge(filter$, sort$, this.paginator.page).pipe(
      tap(() => this.loadMembres())
    ).subscribe());
  }

  private loadMembres(): void {
    this.store.dispatch(new MembreLoadAction(
      {
        filter: this.filter.toLocaleLowerCase(),
        pageIndex: this.paginator.pageIndex,
        pageSize: this.paginator.pageSize,
        sortDirection: this.sort.direction,
        sortField: this.sort.active
      } as MembreParameter
    ));
  }

  private initializeData(membres: Membre[]): void {
    this.dataSource = new MatTableDataSource(membres.length ? membres : this.noData);
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public retry(): void {
    this.loadMembres();
  }
}

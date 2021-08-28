export interface MembreParameter {
  filter: string;
  sortDirection: 'asc' | 'desc'| '';
  sortField: string;
  pageIndex: number;
  pageSize: number;
}

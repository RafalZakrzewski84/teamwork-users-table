export interface Homeworld {
  [key: string]: string;
}
interface Common {
  [key: string]: string | Homeworld;
}

export interface User extends Common {}

export interface Result {
  next: string;
  previous: string;
  users: User[];
}

export interface Column {
  label: string;
  accessor: string;
}

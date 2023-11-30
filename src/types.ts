export interface Homeworld {
  [key: string]: string;
}
interface Common {
  [key: string]: string | Homeworld;
}

export interface User extends Common {}

export interface Row extends Common {}

export interface Planet {
  diameter: string;
  climate: string;
  population: string;
}

export interface PlanetResponse extends Planet {
  name: string;
}

export interface UserRow {
  name: string;
  height: string;
  mass: string;
  created: string;
  edited: string;
  homeworld: string;
}

export interface UserResponse extends UserRow {
  planetData: Planet;
}

export interface Column {
  label: string;
  accessor: string;
}

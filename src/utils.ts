import axios from 'axios';
import { User } from './types';

export const getData = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
};

export const getPlanet = async (planetUrl: string) => {
  const planet = await getData(planetUrl);
  const { name, diameter, climate, population } = planet;
  return { name, diameter, climate, population };
};

export const getUserWithPlanet = async (user: User) => {
  if (typeof user.homeworld !== 'string') {
    throw new Error('Homeworld must be a string');
  }

  const { name, diameter, climate, population } = await getPlanet(
    user.homeworld,
  );

  return {
    name: user.name,
    height: user.height,
    mass: user.mass,
    created: user.created.toString().slice(0, 10),
    edited: user.edited.toString().slice(0, 10),
    homeworld: name,
    planetData: { diameter, climate, population },
  };
};

export const getUsers = async (usersUrl: string) => {
  try {
    const data = await getData(usersUrl);

    const users: User[] = await Promise.all(
      data.results.map(async (user: User) => getUserWithPlanet(user)),
    );

    const next: string = data.next;
    const previous: string = data.previous;

    return { next, previous, users };
  } catch (error) {
    console.log('Error when fetching users data', error);
  }
};

export const getColumnsFromUserData = (user: User) =>
  Object.keys(user)
    .filter(key => key !== 'planetData')
    .map(key => {
      if (key === 'homeworld')
        return {
          label: 'Planet Name',
          accessor: key,
        };

      const labelFromKey = key.charAt(0).toUpperCase() + key.slice(1);
      return {
        label: labelFromKey,
        accessor: key,
      };
    });

import localforage from 'localforage';

export type LoggedInUser = {
  username: string;
  time: number;
};

export type Vehicle = {
  id?: string;
  make: string;
  model: string;
  year: number;
  value: number;
  favorite: boolean;
};

const LOGGED_IN_USER_KEY = 'loggedInUser';
const MINUTES = 30;

localforage.config({
  driver: localforage.INDEXEDDB,
  name: 'Fleet Master',
  version: 1.0,
  storeName: 'fleetMaster',
  description: 'Stores key value pair for Vehicle Mgmt Software',
});

export const loginUser = async (username: string): Promise<void> => {
  const user: LoggedInUser = {
    username,
    time: Math.floor(Date.now() / 1000),
  };

  try {
    await localforage.setItem<LoggedInUser>(LOGGED_IN_USER_KEY, user);
  } catch (err) {
    console.error(`Unable to login user: ${username}`);
  }
};

export const logoutUser = async (): Promise<void> => {
  try {
    await localforage.removeItem(LOGGED_IN_USER_KEY);
  } catch (err) {
    console.error('Unable to log out current user');
  }
};

export const getCurrentUser = async (): Promise<LoggedInUser | null> => {
  try {
    const user = await localforage.getItem<LoggedInUser>(LOGGED_IN_USER_KEY);
    const thirtyMinutesAgo = Math.floor(
      (Date.now() - MINUTES * 60 * 1000) / 1000
    );
    if (user && user.time >= thirtyMinutesAgo) {
      return user;
    } else if (user) {
      await localforage.removeItem(LOGGED_IN_USER_KEY);
      return null;
    }
  } catch (err) {
    console.log('Unable to get logged in user');
  }
  return null;
};

export const getUserVehicles = async (
  username: string,
  searchParams: string = ''
): Promise<Vehicle[] | null> => {
  const vehicles = await localforage.getItem<Vehicle[]>(username);
  const filteredVehicles = vehicles?.filter((vehicle) => {
    const vehicleName = `${vehicle.make}${vehicle.model}`.toLowerCase();
    return vehicleName.includes(searchParams.toLowerCase());
  });
  return filteredVehicles ?? null;
};

export const getUserVehicle = async (
  username: string,
  vehicleId: string
): Promise<Vehicle | null> => {
  const vehicles = await getUserVehicles(username);
  if (vehicles) {
    return (
      vehicles.find((vehicle) => vehicle.id && vehicle.id === vehicleId) || null
    );
  } else {
    return null;
  }
};

export const saveUserVehicle = async (
  username: string,
  vehicle: Vehicle
): Promise<void> => {
  const savedVehicles = (await localforage.getItem<Vehicle[]>(username)) || [];

  const vehicleIndex = savedVehicles.findIndex(
    (v) => vehicle.id && vehicle.id === v.id
  );

  if (vehicleIndex !== -1) {
    savedVehicles[vehicleIndex] = vehicle;
  } else {
    savedVehicles.push(vehicle);
  }

  await localforage.setItem<Vehicle[]>(username, savedVehicles);
};

export const deleteUserVehicle = async (
  username: string,
  vehicleId: string
): Promise<void> => {
  const savedVehicles = (await localforage.getItem<Vehicle[]>(username)) || [];

  const vehicleIndex = savedVehicles.findIndex((v) => v.id === vehicleId);

  if (vehicleIndex !== -1) {
    savedVehicles.splice(vehicleIndex, 1);
  }

  await localforage.setItem<Vehicle[]>(username, savedVehicles);
};

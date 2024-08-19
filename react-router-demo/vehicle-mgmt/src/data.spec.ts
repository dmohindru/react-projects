import { describe, expect, jest } from '@jest/globals';
import localforage from 'localforage';
import type { LoggedInUser, Vehicle } from './data';
import {
  loginUser,
  logoutUser,
  getCurrentUser,
  getUserVehicles,
  saveUserVehicle,
  deleteUserVehicle,
} from './data';

jest.mock('localforage');
const mockedLocalForage = localforage as jest.Mocked<typeof localforage>;

describe('User login tests', () => {
  const mockUserName = 'mock-user-name';
  const mockUser: LoggedInUser = {
    username: mockUserName,
    time: Math.floor(Date.now() / 1000),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should login user and save logged in user in local storage', async () => {
    await loginUser(mockUserName);
    expect(localforage.setItem).toHaveBeenCalledWith('loggedInUser', mockUser);
  });

  it('Should return current logged in user if previous login was less than 30 mins', async () => {
    mockedLocalForage.getItem.mockResolvedValue(mockUser);
    const loggedInUser = await getCurrentUser();
    expect(loggedInUser).toBe(mockUser);
  });

  it('Should return null user if no logged in user found in localforage', async () => {
    mockedLocalForage.getItem.mockResolvedValue(null);
    const loggedInUser = await getCurrentUser();
    expect(loggedInUser).toBe(null);
  });

  it('Should return null user if previous login was greater than 30 mins', async () => {
    const fortyMinutesAgo = Math.floor((Date.now() - 40 * 60 * 1000) / 1000);
    const oldMockUser: LoggedInUser = {
      username: 'old-mock-user-name',
      time: fortyMinutesAgo,
    };
    mockedLocalForage.getItem.mockResolvedValue(oldMockUser);
    const loggedInUser = await getCurrentUser();
    expect(loggedInUser).toBe(null);
    expect(localforage.removeItem).toHaveBeenCalledWith('loggedInUser');
  });

  it('Should logout user and remove from local storage', async () => {
    await logoutUser();
    expect(localforage.removeItem).toHaveBeenCalledWith('loggedInUser');
  });
});

describe('Vehicles Test', () => {
  const mockVehicleList: Vehicle[] = [
    {
      id: 'some-id-1',
      make: 'ford',
      model: 'falcon',
      year: 2007,
      value: 6000,
      favorite: false,
    },
    {
      id: 'some-id-2',
      make: 'ford',
      model: 'focus',
      year: 2013,
      value: 10000,
      favorite: true,
    },
    {
      id: 'some-id-3',
      make: 'Hyundai',
      model: 'i30',
      year: 2015,
      value: 12000,
      favorite: false,
    },
  ];

  const loggedInUser = 'loggedInUser';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should return saved vehicles for logged in user', async () => {
    mockedLocalForage.getItem.mockResolvedValue(mockVehicleList);
    const userVehicles = await getUserVehicles(loggedInUser);
    expect(userVehicles).toBe(mockVehicleList);
  });

  it('Should save vehicle to localForage', async () => {
    mockedLocalForage.getItem.mockResolvedValue(mockVehicleList);
    const newVehicle: Vehicle = {
      id: 'some-id-4',
      make: 'Mazda',
      model: 'CX-3',
      year: 2020,
      value: 18000,
      favorite: true,
    };

    await saveUserVehicle(loggedInUser, newVehicle);
    expect(localforage.setItem).toHaveBeenCalledWith(loggedInUser, [
      ...mockVehicleList,
    ]);
  });

  it('Should save vehicle to localForage for first vehicle in list', async () => {
    mockedLocalForage.getItem.mockResolvedValue(null);
    const newVehicle: Vehicle = {
      id: 'some-id-4',
      make: 'Mazda',
      model: 'CX-3',
      year: 2020,
      value: 18000,
      favorite: true,
    };

    await saveUserVehicle(loggedInUser, newVehicle);
    expect(localforage.setItem).toHaveBeenCalledWith(loggedInUser, [
      newVehicle,
    ]);
  });

  it('Should modify vehicle to localForage', async () => {
    mockedLocalForage.getItem.mockResolvedValue(mockVehicleList);
    const modifiedVehicle: Vehicle = {
      id: 'some-id-3',
      make: 'Mazda',
      model: 'CX-3',
      year: 2020,
      value: 18000,
      favorite: true,
    };
    await saveUserVehicle(loggedInUser, modifiedVehicle);
    expect(localforage.setItem).toHaveBeenCalledWith(loggedInUser, [
      ...mockVehicleList,
    ]);
  });

  it('Should delete vehicle from localForage', async () => {
    mockedLocalForage.getItem.mockResolvedValue(mockVehicleList);
    const vehicleIdToDelete = 'some-id-2';
    await deleteUserVehicle(loggedInUser, vehicleIdToDelete);
    expect(localforage.setItem).toHaveBeenCalledWith(loggedInUser, [
      ...mockVehicleList,
    ]);
  });
});

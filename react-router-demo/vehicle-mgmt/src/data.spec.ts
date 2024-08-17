import { describe, test, expect, jest } from '@jest/globals';
import localforage from 'localforage';
import type { LoggedInUser, Vehicle } from './data';
import { loginUser, logoutUser, getCurrentUser } from './data';

jest.mock('localforage');

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
    (localforage.getItem as jest.Mock).mockReturnValue(mockUser);
    const loggedInUser = await getCurrentUser();
    expect(loggedInUser).toBe(mockUser);
  });

  it('Should return null user if no logged in user found in localforage', async () => {
    (localforage.getItem as jest.Mock).mockReturnValue(null);
    const loggedInUser = await getCurrentUser();
    expect(loggedInUser).toBe(null);
  });

  it('Should return null user if previous login was greater than 30 mins', async () => {
    const fortyMinutesAgo = Math.floor((Date.now() - 40 * 60 * 1000) / 1000);
    const oldMockUser: LoggedInUser = {
      username: 'old-mock-user-name',
      time: fortyMinutesAgo,
    };
    (localforage.getItem as jest.Mock).mockReturnValue(oldMockUser);
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

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should return saved vehicles for logged in user', () => {
    throw Error('Not Implemented');
  });

  it('Should save vehicle to localForage', () => {
    throw Error('Not Implemented');
  });

  it('Should modify vehicle to localForage', () => {
    throw Error('Not Implemented');
  });
  it('Should delete vehicle from localForage', () => {
    throw Error('Not Implemented');
  });
});

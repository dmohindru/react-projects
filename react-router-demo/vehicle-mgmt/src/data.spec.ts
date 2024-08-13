import { describe, test, expect, jest } from '@jest/globals';
import localforage from 'localforage';
import { loginUser, logoutUser, getCurrentUser } from './data';
import exp from 'constants';

jest.mock('localforage');
// https://mattmazzola.medium.com/how-to-debug-jest-tests-with-vscode-48f003c7cb41

describe('User login tests', () => {
  it('Should login user and save logged in user in local forage', async () => {
    throw Error('Not Implemented');
  });

  it('Should return current logged in user if previous login was less than 30 mins', () => {
    throw Error('Not Implemented');
  });

  it('Should return null user if no logged in user found in localforage', () => {
    throw Error('Not Implemented');
  });

  it('Should return null user if previous login was greater than 30 mins', () => {
    throw Error('Not Implemented');
  });
});

describe('Vehicles Test', () => {
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

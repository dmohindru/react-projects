import localforage from 'localforage';

export interface LoggedInUser {
  username: string;
  time: number;
}

const LOGGED_IN_USER_KEY = 'loggedInUser';

localforage.config({
  driver: localforage.INDEXEDDB,
  name: 'Vehicle Mgmt',
  version: 1.0,
  storeName: 'vehicleMgmt',
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
    return user;
  } catch (err) {
    console.log('Unable to get logged in user');
  }
  return null;
};

import { useState } from 'react';

// Define the type for the hook's return value
type UseLocalStorageReturnType<T> = [
  T,
  (value: T | ((val: T) => T)) => void,
  () => void,
];

// Custom hook to use local storage
const useLocalStorage = <T>(
  key: string,
  initialValue: T
): UseLocalStorageReturnType<T> => {
  // State to store our value
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  // Function to set a new value
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  // Function to remove the value from local storage
  const removeValue = () => {
    try {
      // Remove from local storage
      window.localStorage.removeItem(key);
      // Reset the state
      setStoredValue(initialValue);
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue, removeValue];
};

export default useLocalStorage;

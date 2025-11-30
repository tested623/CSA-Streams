
import type { User, Animation, Profile } from './types';
import { ANIMATIONS as INITIAL_ANIMATIONS, AVATARS, PROFILES as DEFAULT_PROFILES } from './constants';

const LOCAL_STORAGE_KEY = 'chickensoup_data';

export interface RemoteData {
  users: User[];
  animations: Animation[];
}

export const loadRemoteData = async (): Promise<RemoteData> => {
  try {
    const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedData) {
      console.log('✅ Loaded data from localStorage.');
      const parsedData: RemoteData = JSON.parse(storedData);
      // Ensure animations are populated if they are somehow empty in storage
      if (!parsedData.animations || parsedData.animations.length === 0) {
        parsedData.animations = INITIAL_ANIMATIONS;
      }
      return parsedData;
    } else {
      console.log('ℹ️ No data in localStorage, using initial default data.');
    }
  } catch (error) {
    console.error('❌ Error loading data from localStorage:', error);
  }
  
  // If no data or error, return initial state with no users
  return { users: [], animations: INITIAL_ANIMATIONS };
};

export const saveRemoteData = async (data: RemoteData): Promise<void> => {
  try {
    const dataString = JSON.stringify(data);
    localStorage.setItem(LOCAL_STORAGE_KEY, dataString);
    console.log('✅ Saved data to localStorage.', data);
  } catch (error) {
    console.error('❌ Error saving data to localStorage:', error);
  }
};

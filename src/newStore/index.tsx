import { createStore } from 'redux';

type User = {
  name: string;
  age: number;
  admin: boolean;
};

const defaultUser: User = {
  name: 'Guest',
  age: 0,
  admin: false,
};

const setName = (payload: string) =>
  ({
    type: 'SET_NAME',
    payload,
  } as const);

const setAge = (payload: number) =>
  ({
    type: 'SET_AGE',
    payload,
  } as const);

const setAdmin = (payload: boolean) =>
  ({
    type: 'SET_ADMIN',
    payload,
  } as const);

type Actions = ReturnType<typeof setName | typeof setAge | typeof setAdmin>;

function reducer(state = defaultUser, action: Actions) {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_AGE':
      return { ...state, age: action.payload };
    case 'SET_ADMIN':
      return { ...state, admin: action.payload };
    default:
      return state;
  }
}

const store = createStore(reducer);

type RootState = ReturnType<typeof store.getState>;
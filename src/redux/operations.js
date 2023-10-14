import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios('/contacts');
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'conatcts/addContact',
  async (contact, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'conatcts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

// export const register = createAsyncThunk('auth/register', async credentials => {
//   try {
//     const { data } = await axios.post('/users/signup', credentials);
//     token.set(data.token);
//     return data;
//   } catch (error) {}
// });

// export const logIn = createAsyncThunk('auth/login', async credentials => {
//   try {
//     const { data } = await axios.post('/users/login', credentials);
//     token.set(data.token);
//     return data;
//   } catch (error) {}
// });

// export const logOut = createAsyncThunk('auth/logout', async () => {
//   try {
//     await axios.post('/users/logout');
//     token.unset();
//   } catch (error) {}
// });

// export const fetchCurrentUser = createAsyncThunk(
//   'auth/refresh',
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistToken = state.auth.token;

//     if (persistToken === null) {
//       return thunkAPI.rejectWithValue();
//     }

//     token.set(persistToken);
//     try {
//       const { data } = await axios.get('/users/current');
//       return data;
//     } catch (error) {}
//   }
// );

////////////////////////////////////////////

// const setAuthToken = token => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// const clearAuthToken = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

// export const login = createAsyncThunk('auth/login', async (body, thunkAPI) => {
//   try {
//     const { data } = await axios.post('/users/login', body);
//     setAuthToken(data.token);
//     return data;
//   } catch (err) {
//     const msg =
//       Object.keys(err?.response?.data).length === 0
//         ? 'No user with that address. Need to register.'
//         : err.message;
//     return thunkAPI.rejectWithValue(msg);
//   }
// });
// export const signUp = createAsyncThunk(
//   'auth/signup',
//   async (body, thunkAPI) => {
//     try {
//       const { data } = await axios.post('/users/signup', body);
//       setAuthToken(data.token);
//       return data;
//     } catch (err) {
//       const msg =
//         JSON.parse(err?.request?.response).code === 11000
//           ? 'Your email is already registered'
//           : err.message;
//       return thunkAPI.rejectWithValue(msg);
//     }
//   }
// );
// export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
//   try {
//     const { data } = await axios.post('/users/logout');
//     clearAuthToken();
//     return data;
//   } catch (err) {
//     return thunkAPI.rejectWithValue(err.message);
//   }
// });

// export const refreshUser = createAsyncThunk(
//   'auth/refresh',
//   async (_, thunkAPI) => {
//     const {
//       auth: {
//         userInfo: { token },
//       },
//     } = thunkAPI.getState();
//     token && setAuthToken(token);
//     try {
//       const { data } = await axios('/users/current');
//       return data;
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err.message);
//     }
//   }
// );

// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchAll',
//   async (_, thunkAPI) => {
//     try {
//       const { data } = await axios('/contacts');
//       return data;
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err.message);
//     }
//   }
// );
// export const addContact = createAsyncThunk(
//   'conatcts/addContact',
//   async (contact, thunkAPI) => {
//     try {
//       const { data } = await axios.post('/contacts', contact);
//       return data;
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err.message);
//     }
//   }
// );
// export const deleteContact = createAsyncThunk(
//   'conatcts/deleteContact',
//   async (contactId, thunkAPI) => {
//     try {
//       const { data } = await axios.delete(`/contacts/${contactId}`);
//       return data;
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err.message);
//     }
//   }
// );

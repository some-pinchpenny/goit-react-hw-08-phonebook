import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts;
export const selectIsLoading = state => state.isLoading;
export const selectError = state => state.error;
export const selectFilter = state => state.filter;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUserName = state => state.auth.user.name;
export const selectIsFetchCurrentUser = state => state.auth.isFetchCurrentUser;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  ({ items }, filter) => {
    return items.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

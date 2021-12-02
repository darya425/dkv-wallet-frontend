const initialState = {
  snackbarOpen: false,
  snackbarType: 'success',
  snackbarMessage: '',
};

export const SET_SNACKBAR = 'teamly/settings/SET_SNACKBAR';
// eslint-disable-next-line import/no-anonymous-default-export
export default function snackbarReduser(state = initialState, action) {
  switch (action.type) {
    case SET_SNACKBAR:
      const { snackbarOpen, snackbarMessage, snackbarType } = action;
      return {
        ...state,
        snackbarOpen,
        snackbarType,
        snackbarMessage,
      };
    default:
      return state;
  }
}

export const setSnackbar = (
  snackbarOpen,
  snackbarType = 'success',
  snackbarMessage = '',
) => ({
  type: SET_SNACKBAR,
  snackbarOpen,
  snackbarType,
  snackbarMessage,
});

import api from "../../../utils/api";

export const signIn = ( username, password ) => {
  loading();
  return async (dispatch, getState) => {  
    await api()
      .get('/user?username=' + username + "&password" + password)
      .then(async function (response) {
          if(Array.isArray(response.data)){ 
            dispatch({ type: 'SIGN_IN', data: response.data[0] });   
          }
          else{
            dispatch({ type: 'SIGN_IN_ERROR', data: response.data });  
          }
      })
      .catch(function (error) {
        dispatch({ type: 'SIGN_IN_ERROR', data: error.response.data });
      });   
  };
};

const logout  = () =>{
  localStorage.removeItem("token");
}

export const loading = async () => {
  return async (dispatch, getState) => {
    dispatch({ type: 'LOADING', data: true });  
  };
};

export const signOut = () => {
  return async (dispatch, getState) => {
    dispatch({ type: 'LOADING', data: true });  
    logout();
    dispatch({ type: 'SIGN_OUT'});
  };
};

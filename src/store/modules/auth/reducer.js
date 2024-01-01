const initialState = {
    loading: false, 
    loggedIn: false,
    user:{},
    error:""
  }
  
export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
       case 'RESTORE_TOKEN':
            return {
              ...state,
              userToken: action.data.token,
              userId:action.data.userId,
              isLoading: false,
              error:"",
            };
            case 'LOADING':
            return {
              ...state,
              isLoading: action.data,
            };
          case 'SIGN_IN':
            localStorage.setItem('token', action.data.token);
            return {
              ...state,
              loggedIn:true,
              loading: false, 
              user: action.data,
              error:"",
            }; 
            case 'SIGN_IN_ERROR':
            return {
              ...state,
              loggedIn:false,
              loading: false,
              error:action.data
            };
          case 'SIGN_OUT':
            return {
              ...state,
              loggedIn:false,
              loading: false,
              user:{},
              error:""
            };
      default:
        return state;
    }
  };
  
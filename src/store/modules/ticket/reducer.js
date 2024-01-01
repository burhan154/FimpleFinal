const initialState = {
    isLoading: true, 
    tickets: [],
    ticket:{},
    error:""
  }
  
export const TicketReducer = (state = initialState, action) => {
    switch (action.type) {
          case 'GET_TICKETS':
            return {
              ...state,
              tickets: action.data,
              isLoading:false,
              error:""
            }; 
            case 'GET_TICKET':
            return {
              ...state,
              ticket: action.data,
              isLoading:false,
              error:""
            }; 
            case 'GET_LIST_ERROR':
            return {
              ...state,
              ticket: {},
              isLoading:false,
              error:action.data
            };
            case 'CLEAR_TICKET':
            return {
              ...state,
              tickets: [],
              ticket:{},
              isLoading:true,
            };
            case 'LOADED_TICKET':
            return {
              ...state,
              isLoading:true,
            };
               
      default:
        return state;
    }
  };
  
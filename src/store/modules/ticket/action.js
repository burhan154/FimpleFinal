import api from "../../../utils/api";

export const getTickets = () => {
  return async (dispatch, getState) => {
    await api()
      .get('/ticket/?isSolved=false') 
      .then(async function (response) {
        dispatch({ type: 'GET_TICKETS', data: response.data })  
      }) 
      .catch(function (error) {
        dispatch({ type: 'GET_LIST_ERROR', data: error.response.data });
      });
  };
};

export const searchTicket = (code) => {
  return async (dispatch, getState) => {
    await api()
      .get('/ticket/?code='+code) 
      .then(async function (response) {
        dispatch({ type: 'GET_TICKET', data: response.data[0] })  
      }) 
      .catch(function (error) {
        dispatch({ type: 'GET_LIST_ERROR', data: error.response.data });
      });
  };
};

export const addTicket = (ticket) => {
  return async (dispatch, getState) => {
    await api()
      .post('/ticket/?code=',ticket) 
      .then(async function (response) {
        dispatch({ type: 'GET_TICKET', data: response.data })  
      }) 
      .catch(function (error) {
        dispatch({ type: 'GET_LIST_ERROR', data: error.response.data });    
      });
  };
};

export const updateTicket = (ticket) => {
  return async (dispatch, getState) => {
    await api()
      .put('/ticket/'+ticket.id,ticket) 
      .then(async function (response) {
        dispatch({ type: 'GET_TICKET', data: response.data })  
      }) 
      .catch(function (error) {
        dispatch({ type: 'GET_LIST_ERROR', data: error.response.data });
      });
  };
};

export const clearTicket = () => {
  return (dispatch, getState) => {
    dispatch({ type: 'CLEAR_TICKET'})    
  };
};

export const loadedTicket = () => {
  return (dispatch, getState) => {
    dispatch({ type: 'LOADED_TICKET'})    
  };
};
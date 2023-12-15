import {
    SET_ALL_BOOKS,
    SET_FILTER_BOOKS,
    SET_SELECTED_BOOK,
    SET_LOADING,
    SET_PAGINATION,
    SET_CART,
    SET_ORDERS
  } from "./actionTypes";
  
  const initialState = {
    pagination:{
      offset: 0,
      limit: 20
    },
    selectedBook: null,
    filterData:[],
    loading: true,
    books: [],
    cart: [],
    orders: []
  };
  
  const myReducer = (
    state = initialState,
    action: { type: string; payload: any }
  ) => {
    switch (action.type) {
      case SET_LOADING:
        return {
          ...state,
          loading: action.payload
        };
      case SET_SELECTED_BOOK:
        return {
          ...state,
          selectedBook: action.payload,
          loading: false
        };
      case SET_FILTER_BOOKS:
        return {
          ...state,
          filterData: action.payload,
          loading: false
        };
      case SET_ALL_BOOKS:
        return {
          ...state,
          books: action.payload,
          loading: false
        };
      case SET_PAGINATION:
        return{
          ...state,
          pagination: action.payload,
          loading: false
        };
      case SET_CART:
        return{
          ...state,
          cart: action.payload,
          loading: false
        };
      case SET_ORDERS:
        return{
          ...state,
          orders: action.payload,
          loading: false
        };
      default:
        return state;
    }
  };
  
  export default myReducer;
import { checkSearch } from "../helper/checkSearch";
import {
  SET_ALL_BOOKS,
  SET_FILTER_BOOKS,
  SET_PAGINATION,
} from "./actionTypes";

const setEvent = (eventData, type, dispatch) => {
  return dispatch({
    type: type,
    payload: eventData
  });
};

const sortAction = (
  allBooks,
  filterData,
  dispatch,
  key
) => {
  const allData = [...allBooks];
  const searchedData = [...filterData];
  const sortedBooksArray = allData.sort((a, b) => {
    const valueA = a.volumeInfo[key] || 0;
    const valueB = b.volumeInfo[key] || 0;

    if (valueA < valueB) {
      return -1;
    } else if (valueA > valueB) {
      return 1;
    } else {
      return 0;
    }
  });
  const sortedFilteredArray = searchedData.sort((a, b) => {
    const valueA = a.volumeInfo[key] || 0;
    const valueB = b.volumeInfo[key] || 0;

    if (valueA < valueB) {
      return -1;
    } else if (valueA > valueB) {
      return 1;
    } else {
      return 0;
    }
  });
  console.log(sortedBooksArray, sortedFilteredArray)
  setEvent(sortedFilteredArray, SET_FILTER_BOOKS, dispatch);
  setEvent(sortedBooksArray, SET_ALL_BOOKS, dispatch);
};

const searchAction = (
  value,
  books,
  dispatch,
) => {
  const arr = [];
  const pagination = {
    offset : 0,
    limit : 20
  }
  if (!value) {
    setEvent([], SET_FILTER_BOOKS, dispatch);
    setEvent(pagination, SET_PAGINATION, dispatch);
    return;
  }
  books.forEach((book) => {
    if (
      checkSearch(book.volumeInfo.title, value) ||
      checkSearch(book.volumeInfo.authors.join(), value)
    ) {
      arr.push(book);
    }
  });
  
  setEvent(arr, SET_FILTER_BOOKS, dispatch);
  setEvent(pagination, SET_PAGINATION, dispatch);
};

export { sortAction, searchAction };
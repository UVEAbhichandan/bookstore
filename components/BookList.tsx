// components/BookList.tsx
import React from 'react';
import BookCard from './BookCard';
import { connect, useDispatch } from 'react-redux';
import Pagination from '../helper/Pagination';
import { SET_CART } from '../redux/actionTypes';

interface BookListProps {
  books: Array<any>; // Replace 'any' with the actual type of your book data
}

const BookList: React.FC<BookListProps> = (props: any) => {
    const {books, filterData, cart} = props;
    const {limit, offset} = props.pagination;
    const dispatch = useDispatch()
    const handleSetCart = (book) =>{
      const newCart = cart.length ? [...cart] : []
      newCart.push(book)
      dispatch({
        type: SET_CART,
        payload: newCart
      })
    }
    console.log(props)
    return (
    <div>
      <div className="flex flex-wrap p-3 justify-center">
        {(filterData.length ? filterData : books).slice(offset, limit).map((book) => (
          <BookCard key={book.id} book={book} handleSetCart={handleSetCart} />
        ))}
      </div>
      <Pagination />
    </div>
  );
};


const mapStateToProps = ({ books, pagination, filterData, cart, selectedBooks }) => {
  return {
    books,
    pagination,
    filterData,
    cart,
    selectedBooks
  };
};

const mapDispatchToProps = {
  // updateAction
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);

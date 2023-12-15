// components/BookCard.tsx
import React from 'react';
import Link from 'next/link'
import { useDispatch } from 'react-redux';
import { SET_SELECTED_BOOK } from '../redux/actionTypes';

interface BookCardProps {
  book: any; // Replace 'any' with the actual type of your book data
}

const BookCard: React.FC<BookCardProps> = ({ book, handleSetCart }: any) => {
  const dispatch = useDispatch()

  const onBookClick = () =>{
    console.log(book)
    dispatch({
      type: SET_SELECTED_BOOK,
      payload: book
    })
  }

  return (
    <div className='p-3 mt-12'>
      <Link href={`/book/${book.id}`} onClick={()=>onBookClick()}>
      {book.volumeInfo.imageLinks && 
      <div className='flex justify-center mb-1'>
      <img src={book.volumeInfo.imageLinks.thumbnail} alt={`${book.title} cover`} />
      </div>
      }
      <div className='text-[12px] w-[200px] font-bold text-center'>
      <h3 className='truncate'>Title: {book.volumeInfo.title}</h3>
      <p className='truncate'>Author: {book.volumeInfo.authors.join()}</p>
      {book.volumeInfo.averageRating &&
        <p className='truncate'>Rating: {book.volumeInfo.averageRating}</p>}
        
        <p className='truncate'>Published Date: {book.volumeInfo.publishedDate}</p>

        </div>
      {/* Add 'Add to Cart' button and other details */}
      {handleSetCart &&
        <button onClick={()=>handleSetCart(book)}>Add to Cart</button>}
        </Link>
    </div>
  );
};

export default BookCard;

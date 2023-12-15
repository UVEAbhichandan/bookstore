// pages/index.tsx
import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import BookList from '../components/BookList';
import { connect, useDispatch } from "react-redux";
import { SET_ALL_BOOKS } from '../redux/actionTypes';
import Link from 'next/link'
import { searchAction, sortAction } from '../redux/action';
import debouce from "lodash.debounce";

const Home = (props) => {
  const dispatch = useDispatch()
  const [isSortOpen, setSortOpen] = useState(false)
  const [sortKey, setSortKey] = useState('')
  useEffect(() => {
    if(props.data){
      dispatch({type: SET_ALL_BOOKS, payload: props.data})
    }
  }, []);
console.log(props)
  function search(e: { target: { value: string } }) {
    searchAction(
      e.target.value,
      props.data,
      dispatch,
    );
  }

  const debouncedResults = useMemo(() => {
    return debouce(search, 300);
  }, []);

  const onSortClick = (key) =>{
    setSortKey(key)
    setSortOpen(false)
    sortAction(props.books,
      props.filterData,
      dispatch,
      key === "Rating" ? 'averageRating' : 'publishedDate'
      )
  }


  return (
    <div>
      <div className='flex'>
      <h1 className='text-center font-bold text-[20px] p-2 flex w-full justify-center'>Bookstore</h1>
      <Link href="/cart" className='p-2'>
      <button className='border bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        Cart
        </button>
        </Link>
      </div>
      
    <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative mx-20 my-5">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input onChange={debouncedResults} type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search title, author..." />
    </div>


    <div className='flex w-full justify-end items-start'>
      <button  onClick={()=>setSortOpen(!isSortOpen)} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="mr-5 absolute text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">{sortKey || 'Sort by'}<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
        </svg>
      </button>

      <div id="dropdown" className={`absolute mr-5 mt-10 mr-10 z-10 ${isSortOpen ? '' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
          <ul onClick={(e)=>onSortClick(e.target.innerText)} className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Published Date</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Rating</a>
            </li>
          </ul>
      </div>
    </div>


      {props.data && 
        <BookList />
      }
    </div>
  );
};

export async function getServerSideProps() {
  const response = await axios.get('https://d1krvzwx5oquy1.cloudfront.net/books.json');
  return { props: { data: response.data } }
}

const mapStateToProps = ({ books, pagination, filterData, selectedBooks }) => {
  return {
    books,
    pagination,
    filterData,
    selectedBooks
  };
};

const mapDispatchToProps = {
  // updateAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
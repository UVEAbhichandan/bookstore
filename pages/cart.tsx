import { connect } from "react-redux";
import BookCard from "../components/BookCard";
import Link from 'next/link'

const Cart = (props) =>{
    console.log(props)
    return (
        <>
        {props.cart.length ?
        <>
          <div className="flex">
            {props.cart.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
        </div>
        <Link href="/checkout">
        <button className='border bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Proceed to Checkout 
        </button>
          </Link>
          </>
          :
          <h1 className="text-center mt-20">
            <Link href='/'>
            Please add Items to your cart.</Link></h1>}
          </>
    )
}


const mapStateToProps = ({ cart }) => {
    return {
      cart
    };
  };
  
  const mapDispatchToProps = {
    // updateAction
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Cart);
  
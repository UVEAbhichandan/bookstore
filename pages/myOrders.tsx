import { connect } from "react-redux";
import BookCard from "../components/BookCard";

const MyOrders = (props) =>{
    return (
        <>
        <div className="flex">
            {props.orders.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
        </div>
          </>
    )
}

const mapStateToProps = ({ orders }) => {
    return {
      orders
    };
  };
  
  const mapDispatchToProps = {
    // updateAction
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(MyOrders);
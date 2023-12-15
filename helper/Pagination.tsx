import { connect, useDispatch } from "react-redux";
import { SET_PAGINATION } from "../redux/actionTypes";

const Pagination = (props) =>{
    const dispatch = useDispatch()
    const {books} = props;
    const {offset, limit} = props.pagination;

    const handleOnclick = (type) =>{
        const payload = {
            offset: type ? (offset + 20) : (offset - 20),
            limit: type ? limit + 20 : limit - 20
        }
        dispatch({
            type: SET_PAGINATION,
            payload : payload
        })
    }

    return(
        <div className="flex justify-center">
            <button className={`${!offset ? 'bg-gray-300' : 'bg-blue-700'}  text-white font-bold py-2 px-4 rounded mr-5`} disabled={!offset} onClick={()=>handleOnclick(0)}>Prev</button>
            <button className={`${!books[limit+1] ? 'bg-gray-300' : 'bg-blue-700'} hover:bg-blue-700 text-white font-bold ml-5 py-2 px-4 rounded`} disabled={!books[limit+1]} onClick={()=>handleOnclick(1)} className="">Next</button>            
        </div>
    )
}

const mapStateToProps = ({ books, pagination }) => {
    return {
      books,
      pagination,
    };
  };
  
  const mapDispatchToProps = {
    // updateAction
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
  
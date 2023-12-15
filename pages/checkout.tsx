import { connect, useDispatch } from "react-redux";
import { SET_CART, SET_ORDERS } from "../redux/actionTypes";
import { useRouter } from 'next/router'

const Checkout = (props) =>{
    const dispatch = useDispatch()
    const router = useRouter()
    const handleSubmit = () =>{
        dispatch({
            type: SET_ORDERS,
            payload: props.cart
        })
        dispatch({
            type: SET_CART,
            payload: []
        })
        router.push('/myOrders')
    }
    return(
    <div className="mt-8">
        <form className="max-w-sm mx-auto">
        <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
            <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
        </div>
        <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Address</label>
            <input type="text" id="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Phone Number</label>
            <input type="number" id="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email ID</label>
            <input type="email" id="emailAddress" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <button onClick={handleSubmit} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
    </div>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
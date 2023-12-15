// pages/_app.js

import '../styles/globals.css'; // Import the generated Tailwind CSS file
import { Provider } from "react-redux";
import myStore from "../redux/store";
function MyApp({ Component, pageProps }) {
  return <Provider store={myStore}>
    <Component {...pageProps} />
  </Provider>;
}

export default MyApp;

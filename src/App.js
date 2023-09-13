
import { Provider } from 'react-redux';
import './App.css';
import Body from './Components/Body';
import Head from "./Components/Head"
import Store from './utils/Store';
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import MainContainor from './Components/MainContainor';
import WatchPage from './Components/WatchPage';
import Demo from './Components/Demo';
import SearchResults from './Components/SearchResults';


const appRouter = createBrowserRouter([{
  path:"/",
  element:(
    <>
    <Head/>
  <Body/>
  </>
  ),
  children:[
    {
      path:"/",
      element:<MainContainor/>
    },
    {
      path:"watch",
      element:<WatchPage/>

    },
    {
      path:"/search",
      element:<SearchResults/>

    },

    {
      path:"demo",
      element:<Demo/>

    },

  ]
}])

function App() {
  return (
    <Provider store={Store}>
    <div>
      
   
    <RouterProvider router={appRouter}/>
  
     
    </div>
    </Provider>
  );
}

export default App;

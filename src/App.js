import { Provider } from "react-redux";
import { store } from "./redux/store";
import TestingRedux from "./component/TestingRedux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TestingById from "./component/TestingById";
import HomeComp from "./component/HomeComp";
function App() {

  return (
    <div>
    <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<HomeComp />} />
            <Route path="/TestingRedux" element={<TestingRedux /> } />
            <Route path="/TestingRedux/:id" element={<TestingById />} />
          </Routes>
        </Router>
    </Provider> 
    </div>  
    
    // <myContext.Provider value={{text,setText}} >
    //   <SecondComponent />
    // </myContext.Provider>
 
//using use COntext 

//  <ContextProvider>
//  <SecondComponent />
// </ContextProvider> 



  );
}

export default App;
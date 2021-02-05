// import logo from './logo.svg';
// import './App.css';
// import axios from "axios"

// function App() {
//   const getData = ()=>{
//     var config = {
//       method: 'get',
//       url: 'http://localhost:3000/getdata',
//       headers: { 
        
//       }
//     };
    
//     axios(config)
//     .then(function (response) {
//       console.log(JSON.stringify(response.data));
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
    
//   }
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save sdfsfsdfsdfsfsfsdf to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       <button onClick={()=>getData()}>Get Data</button>
//     </div>
//   );
// }

// export default App;

import React from "react"
import LoginForm from "./components/LoginForm"
import GetContainers from "./components/GetContainers"
import Containers from "./components/Containers"
import {connect} from "react-redux"
import TempChart from "./components/TempChart"
import Map from "./components/Map"

const App = (props)=>{
 
  return (
    <div>
{(props.uid===0 || props.uid===-1) && <LoginForm /> }    
    {props.uid===0 && <div>Please Login To continue</div>}
        {props.uid===-1 && <div>Auth failed Please check credentials and try again</div>}
        {(props.uid!==0 && props.uid!==-1) && <div><div>Authenticated!!</div><div><GetContainers/></div></div>}
    <Containers />
    <TempChart />
    <Map />
        </div>
  )
}

const mapStateToProps = (state)=>{
  return ({
      uid:state.users.uid
  })
}

export default connect(mapStateToProps)(App)
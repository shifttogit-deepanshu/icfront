import logo from './logo.svg';
import './App.css';
import axios from "axios"

function App() {
  const getData = ()=>{
    var config = {
      method: 'get',
      url: 'https://backic.azurewebsites.net/getdata',
      headers: { 
        '': '', 
        'Cookie': 'ARRAffinity=c228d005896ab37d8c410789119641a5a5a86af4143695c1ab7878064c764896; ARRAffinitySameSite=c228d005896ab37d8c410789119641a5a5a86af4143695c1ab7878064c764896'
      }
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save sdfsfsdfsdfsfsfsdf to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={()=>getData()}>Get Data</button>
    </div>
  );
}

export default App;

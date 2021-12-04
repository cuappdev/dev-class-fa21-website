 /* eslint-disable */
import logo from './logo.svg';
import jin from './jin.png';
import $ from 'jquery';
import './App.css';

function App() {
  return (
    <div className="App">
      <script>
      console.log("start");
      </script>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to AppDev :)
        </p>
      </header>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 text-light">Android</h1>
        </div>
      </div>
      
      <div className="container px-4">
        <div className="row gx-5">
          <div className="col">
          <button type="button" datatoggle="modal" datatarget="#exampleModal">
            <div className="card" >
              <img src={jin} className="card-img-top" alt="jin" />
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            </button>
          </div>
          <div className="col">
            <div className="card" >
              <img src={jin} className="card-img-top" alt="jin" />
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" >
              <img src={jin} className="card-img-top" alt="jin" />
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" arialabelledby="exampleModalLabel" ariahidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="close" datadismiss="modal" arialabel="Close">
                <span ariahidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" datadismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

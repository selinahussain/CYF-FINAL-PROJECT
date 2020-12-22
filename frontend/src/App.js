
import './App.css';
// import { Button } from 'react-bootstrap';
// import { Form } from 'react-bootstrap';
function App() {
  return (
    <div className="">
    <form>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control w-50 p-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control w-50 p-3" id="exampleInputPassword1" placeholder="Password" />
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  );
}

export default App;

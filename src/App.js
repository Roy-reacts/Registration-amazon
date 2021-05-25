import content from './static';
import './App.css';
import {BrowserRouter as Router,Switch,Link} from 'react-router-dom';

function App() {
  return (
    
  <div className= "App">
  <Router>
  <Switch>
  <Link to = "/login">Login</Link></Switch>
  <Switch>
  <Link to = "/signup">Signup</Link></Switch>
  <a className = "brand" href="/">

  <header>
   <h1>amazon </h1>
 
    </header>
    </a>
  <main>     
  <h1 className="row-center" >Create account</h1>
  <form>
  {content.inputs.map((input,key)=>{
    return(
  
  <div key= {key}>
  
  <p>
  
  <label>
  {input.label}</label>
  </p>
  <p>
  <input name = {input.name} className ="input"/>
  </p>
  </div>
  
    );
})}
<button className= "btn" type="submit">Create your Amazon account</button>

<div>
By creating an account, you agree to Amazon's Conditions of Use and Privacy Notice.</div>


  </form>
  
</main>
  <div className="row">
 
    <footer className ="row" >
    <h4>
    Already have an account? Sign-In
    Purchasing for work? Create a business account</h4>
</footer>

</div>
</Router>
    </div>
    
  );
}

export default App;

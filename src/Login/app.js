import content from './Static';
import './App.css';

function App() {
  return (
    
  <div className= "App">
  <a className = "brand" href="/">

  <header>
   <h1>amazon </h1>
 
    </header>
    </a>
  <main>     
  
  <form>
  {content.inputs.map((input,key)=>{
    return(
  
  <div key= {key}>
  <p>
  <h1 className="row-center" >Sign-In</h1>
  <label>
  {input.label}</label>
  </p>
  <p>
  <input name = {input.name} className ="input"/>
  </p>
  </div>
  
    );
})}
<button className= "btn" type="submit">Continue</button>

<div>
By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</div>


  </form>
  
</main>
  <div className="row">
  <h4>New to Amazon?</h4>
    <footer className ="row" >
<button className= "butn">Create your Amazon account</button></footer>

</div>
    </div>
    
  );
}

export default App;

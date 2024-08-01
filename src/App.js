import './App.css';
import forwardButton from './assets/icon/forwardButton.png';
import apple from './assets/icon/apple.png';
import google from './assets/icon/google.png';
import facebook from './assets/icon/facebook.png';
import search from './assets/icon/search.png';
import menu from './assets/icon/menu.png';
import menu2 from './assets/icon/menu2.png';
import menu3 from './assets/icon/menu3.png';
import menu4 from './assets/icon/menu4.png';
import phone from './assets/icon/phone.png';

function App() {
  return (
    <div className="grid-container">
      <div className="grid-item1">
        <div className="item1_1">   
          <div className="item1_1_1"> Get started </div>  
          <img src={forwardButton} alt="forwardButton" className="forwardButton" />
        </div>
        <div className="item1_1">   
          <img src={apple} alt="apple" className="apple" />
          <div className="item1_1_1"> Continue with Apple </div>  
        </div>
        <div className="item1_2">   
          <img src={google} alt="google" className="google" />
          <div className="item1_2_1"> Continue with Google </div>  
        </div>
        <div className="item1_2">   
          <img src={facebook} alt="facebook" className="google" />
          <div className="item1_2_1"> Continue with Facebook </div>  
        </div>
      </div>
      <div className="grid-item2">
        <div className="item2_1">   
          <img src={search} alt="search" className="google" />
          <div className="item2_1_1"></div>  
        </div>
        <div className="item2_1">   
          <img src={search} alt="search" className="google" />
          <div className="item2_1_1"><div className="search">Search</div></div>  
        </div>
        <div className="item2_1">   
          <img src={search} alt="search" className="google" />
          <div className="item2_1_1"><div className="Textfield">Textfield</div></div>  
        </div>
        <div className="item2_1">   
          <img src={search} alt="search" className="google" />
          <div className="item2_1_1"><div className="search">Search in the web</div></div> 
          <img src={menu} alt="menu" className="menu" /> 
        </div>
        <div className="item2_1">   
          <img src={search} alt="search" className="google" />
          <div className="item2_1_1"><div className="search">Search crypto</div></div> 
          <img src={menu2} alt="menu2" className="menu2" />   
        </div>
        <div className="item2_1">   
          <div className="item2_1_1"><div className="search">Phone number</div></div> 
          <img src={phone} alt="phone" className="phone" />   
        </div>
        <div className="item2_1">   
          <img src={search} alt="search" className="google" />
          <div className="item2_1_1"><div className="search">Search in the web</div></div> 
          <img src={menu3} alt="menu3" className="menu3" />    
        </div>
      </div>
      <div className="grid-item1">
        <div className="item3_1">   
          <div className="item3_1_1">7'</div> 
          <img src={menu4} alt="menu4" className="menu4" /> 
          <div className="item3_1_1">7'</div>  
        </div>
      </div>
      <div className="grid-item1">Item 4</div>
      <div className="grid-item5">Item 5</div>
  </div>
  );
}

export default App;

import './App.css';
import "./Components/style/home.css"
import "./Components/style/node.css"
import "./Components/style/footer.css"
import Header from "./Components/header"
import Home from "./Components/Home"
import Item from "./Components/node"
import Footer from "./Components/Footer"
import { products } from './Components/products';
import React from "react"

function App() {
  const node = products.map((i)=>{
    return <Item key={i.id} {...i}/>
  })

  return (
    <div className="App">
      <Header/>
      <div className='container'>
      <Home/>
        <div className='node-container'>
          {node}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

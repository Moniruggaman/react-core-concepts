import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const friends = ['Razzak', 'Alamgir', 'Salman', 'Jafar Ikbal', 'Umar Sany']
  const products = [
    {name:'Photoshop', price:'$149.99'},
    {name:'Illustrator', price:'$99.99'},
    {name:'PDF-Reader', price:'$38.89'},
    {name: 'Premium Theme', price:'$219.99'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a junior react web developer  </p>
        <Counter></Counter>
        <Users></Users>
        
        <ul>
          {
            friends.map(friend => <li>{friend}</li>)
          }
          {
            products.map(product => <li>{product.name}, {product.price}</li>)
          }
        </ul>
        {
          products.map(product => <Product product={product}></Product>)
        }
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count -1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() =>{
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}, {user.phone}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightGray',
    height:'200px',
    width:'200px',
    float:'left'
  }
  console.log(props)
  return(
    <div style={productStyle}>
      <h2>{props.product.name}</h2>
      <h5>{props.product.price}</h5>
      <button>Buy now</button>
    </div>
  )
}
export default App;

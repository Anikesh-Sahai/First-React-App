import React from 'react';
import './index.css'

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

const Menu = () => {
  const numPizzas = pizzaData.length
  return (
    <main className='menu'>
      <h2>Our Menu</h2>

      {numPizzas > 0 ? 
        <ul className='pizzas'>
          {pizzaData.map((pizza)=>{
            return <Pizza pizzaObj={pizza} key={pizza.name} />
          })}
        </ul>
        :
        <p>Sorry we are out of stock :(</p>
      }

    </main>
  )
}

const Pizza = (props) => {

  return (
    <li className={`pizza ${props.pizzaObj.soldOut ? 'sold-out': ''}`}>
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name}></img>
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{ props.pizzaObj.soldOut ? 'Sold Out' : props.pizzaObj.price+3}</span>
      </div>
    </li>
  )
}

const Header = () => {
  return (
    <header className='header'>
      <h1>Fast Pizza Deleviry App Co.</h1>
    </header>
  )
}

const Footer = () => {
  const hours = new Date().getHours()
  const openHours = 10
  const closeHours = 22
  const isOpen = hours >= openHours && hours <= closeHours
  
  if(!isOpen){
    return (
      <p>We are happy to welcome you between {openHours}:00 and {closeHours}:00</p>
    )
  }
  return (
    <footer className='footer'>
      {isOpen && 
        <div className='order'>
          <p>We are currently open chaww chaww!!! till {closeHours}:00 . Come and order online.</p>
          <button className='btn'>Order</button>
        </div>
      }
    </footer>
  )
}


function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;

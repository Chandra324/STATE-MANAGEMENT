import './App.css';
import MobileDetails from './Redux/MobileDetails';
import { store } from './Redux/store';

function App() {
  
rconst [cartCount, setCartCount] = useState(0);

const addToCart = () => {
  setCartCount(cartCount + 1);
};

const removeFromCart = () => {
  if (cartCount > 0) {
    setCartCount(cartCount - 1);
  }
};

return (
  <div style={styles.container}>
    <h1>🛍️ Online Store</h1>
    <h2>🛒 Items in Cart: {cartCount}</h2>
    <button onClick={addToCart} style={styles.button}>Add to Cart</button>
    <button onClick={removeFromCart} style={styles.button}>Remove from Cart</button>
  </div>
);
}

const styles = {
container: {
  textAlign: 'center',
  marginTop: '50px',
  fontFamily: 'Arial, sans-serif',
},
button: {
  margin: '10px',
  padding: '10px 20px',
  fontSize: '16px',
}
}

export default App;

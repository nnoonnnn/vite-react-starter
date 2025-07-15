import './App.css'
import Header from './Header'
import Footer from './Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="card">
        <h1>Hello React</h1>
        <p>This is a clean React + Vite project.</p>
        <button onClick={() => alert("Clicked!")}>Click Me</button>
        {/* <footer style={{ textAlign: "center", marginTop: "2rem" }}>
          © 2025 vite-react-starter
        </footer> */}
      </div>
      <Footer />
    </div>
  );
}

export default App

import './App.css';
import Header from './components/Header';

function App() {


  return (
    <div className="card">
        <Header />
      <h1>Hello React</h1>
      <p>This is a clean React + Vite project.</p>
      <button onClick={() => alert('Clicked!')}>Click Me</button>
      <footer style={{ textAlign: 'center', marginTop: '2rem' }}>
  © 2025 vite-react-starter
</footer>

    </div>
  )
}

export default App

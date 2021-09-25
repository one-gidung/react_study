import logo from './logo.svg';
import './App.css';

function App() {

  let posts = { color : 'blue', fontSize : '30px'};

  return (
    <div className="App">
      <div className="black-nav">
        <div style={ posts }>개발 Blog</div>
      </div>
      <img src={ logo } />
      <h4> { '강남 고기 맛집' } </h4>
    </div>
  );
}

export default App;

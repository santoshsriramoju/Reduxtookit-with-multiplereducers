import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './state';
import { getResponseData } from './responseState';


function App() {
  const {countReducer:{count}, responseReducer:{data}} = useSelector(state => state);
  const dispatch = useDispatch();
  
  return (
    <div className="App">
      <div className="section1">
        <p>Count is {count}</p>
        <button onClick={() => {
          dispatch(increment())
        }}>+</button> {" "}
        <button onClick={() => {
          dispatch(decrement())
        }}>-</button>

      </div>
      <hr />
      <div className="section2">
        <button onClick={() => {
          dispatch(getResponseData())
        }}>Get Data</button>
        {
          data.length > 0 && data.map(item => {
            return <h3 key={item.id}>{item.title}</h3>
          })
        }
      </div>
    </div>
  );
}

export default App;

import axios from 'axios';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components';
import { Cart, Home } from './pages';
import { setPizzas } from './redux/action/pizzas';

const App = () => {
  const dispatch = useDispatch();
  const hran = useSelector((state) => state);
  console.log(hran);

  useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      dispatch(setPizzas(data.pizzas));
    });
    // eslint-disable-next-line
  }, []); /* Пустой массив, как второй аргумент, означает единоразовый вызов функции внутри хука при первой визуализации компонента */

  return (
    <div className='App'>
      <div className='wrapper'>
        <Header />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home items={[]} />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;

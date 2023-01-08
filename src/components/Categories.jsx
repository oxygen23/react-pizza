import React, { useState, memo } from 'react';

const Categories = memo(
  function Categories({ items, onClickItem }) {
    const [activeItem, setActiveItem] = useState(null);
    const onSelectItem = (index) => {
      setActiveItem(index);
      onClickItem(index);
    };
    console.log('RENDER CATEGORIES');
    return (
      <div className='categories'>
        <ul>
          <li
            className={activeItem === null ? 'active' : ''}
            onClick={() => onSelectItem(null)}
          >
            Все
          </li>
          {items &&
            items.map((name, index) => (
              <li
                className={activeItem === index ? 'active' : ''}
                onClick={() => onSelectItem(index)}
                key={`${name}_${index}`}
              >
                {name}
              </li>
            ))}
        </ul>
      </div>
    );
  }
);
export default Categories;

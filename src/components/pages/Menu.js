import React from 'react';
import {menuList} from '../../extra/menuList';
import MenuItem from '../pages/MenuItem';
import '../../styles/Menu.css';

function Menu() {
  return (
    <div className="Menu">
      <h1 className="menuTitle">Menu</h1>
      <div className="menuList">{menuList.map((menuItem,key)=>{
        return <MenuItem image = {menuItem.image} name = {menuItem.name} price = {menuItem.price} />
      })}

      </div>
    </div>
  );
}

export default Menu;

      
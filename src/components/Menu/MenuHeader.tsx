import React, { FC } from "react";



const MenuHeader: FC = (porps)=> {
  return <div className="cat-menu-header">
    <div className="cat-menu-header-container">{porps.children}</div><i/></div>;
}

export default MenuHeader;
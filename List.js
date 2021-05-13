import React from "react";
import ListItem from './ListItem'
const List = (props)=> {
    return (
      <ul>
        {props.item.map((item, index) => (
          <ListItem
            key={index}>{item.name}</ListItem>
            
          
        ))}
      </ul>
    );
  };

export default List;
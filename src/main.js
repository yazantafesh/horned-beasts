import React from 'react';
import HornedBeasts from './horned-beasts';
import HornsData from './data.json';
import CardColumns from 'react-bootstrap/CardColumns';

class Main extends React.Component{
  render(){
    return(
      <CardColumns>
        <div>
          {HornsData.map((item, index)=>{
            return (
              <HornedBeasts
                key = {index}
                title = {item.title}
                imageUrl = {item.image_url}
                description = {item.description}
              />
            );
          })}
        </div>
      </CardColumns>
    );
  }
}

export default Main;

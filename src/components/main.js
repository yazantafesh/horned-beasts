import React from 'react';
import HornedBeasts from './horned-beasts';
import CardColumns from 'react-bootstrap/CardColumns';

class Main extends React.Component{
  render(){
    return(
      <CardColumns>
        <div>
          {this.props.HornsData.map((item, index)=>{
            return (
              <HornedBeasts
                key = {index}
                title = {item.title}
                imageUrl = {item.image_url}
                description = {item.description}
                renderModal = {this.props.renderModal}
                handleShow = {this.props.handleShow}
              />
            );
          })}
        </div>
      </CardColumns>
    );
  }
}

export default Main;

/* eslint-disable*/
import React from 'react';
import HornedBeasts from './horned-beasts';
import HornsData from './data.json';
import Form from 'react-bootstrap/Form';
import CardColumns from 'react-bootstrap/CardColumns';

class Main extends React.Component {

  updateList = (event) =>{
    let numOfHorns = parseInt(event.target.value);
    let result;
    if (numOfHorns) {
      result=HornsData.filter(element =>{
        if (parseInt(element.horns) == numOfHorns) {
          return element;
        }
      });
    }else{
      result=HornsData;
    }
    this.props.showFilteredData(result);
  }

  render() {
    return (
      <>
        <Form>
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Filter by the Number of Horns</Form.Label>
            <Form.Control as="select" custom onChange={this.updateList}>
              <option value=''>All</option>
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
              <option value='100'>One Hundred</option>
            </Form.Control>
          </Form.Group>
        </Form>
        <CardColumns>
          <div>
            {this.props.HornsData.map((item, index) => {
              return (
                <HornedBeasts
                  key={index}
                  title={item.title}
                  imageUrl={item.image_url}
                  description={item.description}
                  handleShow={this.props.handleShow}
                />
              );
            })}
          </div>
        </CardColumns>
      </>
    );
  }
}

export default Main;

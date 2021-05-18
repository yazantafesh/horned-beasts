import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class HornedBeasts extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      votes:0,
    };
  }

  increaseVotes = () =>{
    this.setState({
      votes: this.state.votes + 1,
    });
  }

  sendInfo = () =>{
    this.props.handleShow(this.props.title);
  }

  render(){
    return(
      <div>
        <Card style={{ width: '18rem'}}>
          <Card.Img onClick={this.sendInfo} variant="top" src={this.props.imageUrl}/>
          <Card.Body >
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
            ❤️: {this.state.votes}
            </Card.Text>
          </Card.Body>
          <Button onClick={this.increaseVotes} variant="primary">Vote</Button>
        </Card>
      </div>
    );
  }
}

export default HornedBeasts;

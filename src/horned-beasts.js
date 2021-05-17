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

  render(){
    return(
      <div>

        {/* <h2>{this.props.title}</h2>
        <img onClick={this.increaseVotes} src={this.props.imageUrl} alt={this.props.title} title={this.props.title}></img>
        <p>{this.props.description}</p>
        <p>❤️: {this.state.votes}</p> */}

        <Card style={{ width: '18rem'}}>
          <Card.Img  variant="top" src={this.props.imageUrl} />
          <Card.Body>
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

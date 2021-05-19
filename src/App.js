import React from 'react';
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';
import HornsData from './components/data.json';
import SelectedBeast from './components/SelectedBeast';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      HornsData:HornsData,
      savedElement:{},
      display: false,
    };
  }

  handleClose = () => {
    this.setState({
      display: false,
    });
  }

  handleShow = (param) =>{
    let result = HornsData.find(element => {
      if (element.title === param) {
        return element;
      }
    });
    this.setState({
      savedElement: result,
      display: true,
    });
  }
  showFilteredData = (newHorns)=>{
    this.setState({
      HornsData : newHorns,
    });
  }

  render(){

    return(
      <div>
        <Header/>
        <Main HornsData = {this.state.HornsData} handleShow = {this.handleShow} showFilteredData ={this.showFilteredData}/>
        <SelectedBeast display={this.state.display} handleClose = {this.handleClose} element = {this.state.savedElement}/>
        <Footer/>
      </div>
    );



  }

}

export default App;

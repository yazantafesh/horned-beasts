import React from 'react';
import Footer from './footer';
import Header from './header';
import Main from './main';

class App extends React.Component{

  render(){

    return(
      <div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );



  }

}

export default App;
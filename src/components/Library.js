import React from 'react';
import React, { Component } from 'react';
import albumData from './../data/albums';

class Library extends Component {
  constructor(props){
    super(props);
    this.state = { albums: albumData };

    }
  }
  render(){
    return(
      <section className="library">
        Library go here
      </section>
    );
  }
};

export default Library; 
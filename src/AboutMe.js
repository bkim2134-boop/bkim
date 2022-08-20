import React, { Component } from 'react'
//instead of having a picture of myself and have something i made in the background of the component perhaps
  //this is just a normal component with normal html yet the theme is not being applied to text.. why?
export class AboutMe extends Component {
  render() {
    return (
      <div>
        <h3>
            Who Am I?
        </h3>
        <p>
            TLDR: Coder, Home Cook, Outdoor Man.
        </p>
        <img>
        </img>
      </div>
    )
  }
}

export default AboutMe
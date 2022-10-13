import React from 'react'
import '../Components/style.css'
import { Container } from 'reactstrap'


class  Homepage extends React.Component{
    constructor (props){
        super(props)
        this.state = {

        }
    }
  render() {
    const settings =  {
      autoplay: true,
      dots: true,
      initialSlide: false,
    };
    return (
        <Container >
      <div>
      </div>
      <br/><br/>
        </Container>

    )
  }
}

export default Homepage;
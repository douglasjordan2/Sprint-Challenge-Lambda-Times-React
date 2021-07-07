import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { carouselData } from '../../data'
// Complete this Carousel 

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 500px;
  position: relative;
  overflow: hidden;
  margin-top: 16px;

  @media (min-width: 1200px) {
    width: 1200px;
  }
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  font-size: 40px;
  border-radius: 50%;
  position: absolute;
  width: 50px;
  height: 50px;
  cursor: pointer;
  z-index: 2;

  :hover {
    color: #333;
    background-color: #fff;
    border: 2px solid #333;
  }
`;

const Left = styled(Button)`
  top: 50%;
  left: 25px;
  transform: translate(0, -50%);
`;

const Right = styled(Button)`
  top: 50%;
  right: 25px;
  transform: translate(0, -50%);
`;

const Img = styled.img`
  width: 100%;
  position: absolute;
  left: -9999px;
  z-index: 1;
`;

export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      carousel: [],
      left: '',
      visible: '',
      right: ''
    }
  }
  componentDidMount(){
    this.setState({ carousel: carouselData, left: carouselData[carouselData.length - 1], visible: carouselData[0], right: carouselData[1] })
  }

  leftClick = () => {
    let right;

    for(let i = 0; i < this.state.carousel.length; i++) {
      if(this.state.carousel[i] === this.state.right) {
        if(i !== this.state.carousel.length - 1) {
          right = this.state.carousel[i + 1]
        } else {
          right = this.state.carousel[0]
        }
      } 
    }

    this.setState({ left: this.state.visible, visible: this.state.right, right: right})
  }

  rightClick = () => {
    let left;

    for(let i = this.state.carousel.length - 1; i >= 0; i--) {
      if(this.state.carousel[i] === this.state.left) {
        if(i !== 0) {
          left = this.state.carousel[i - 1]
        } else {
          left = this.state.carousel[this.state.carousel.length - 1]
        }
      } 
    }

    this.setState({ right: this.state.visible, visible: this.state.left, left: left})
  }

  selectedImage = (source) => {
    const VisImg = styled(Img)`
      left: 0;
    `;

    return <VisImg src={ source } />
  }
  
  render(){
    return (
      <Container>
        <Left onClick={this.leftClick}>{"<"}</Left>
        { this.selectedImage(this.state.visible) }
        <Right className="right-button" onClick={this.rightClick}>{">"}</Right>
      </Container>
    )
  }
}
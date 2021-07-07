import React, { Component } from  'react';
import styled, { css } from 'styled-components';
import TopBar from '../TopBar';
import Header from '../Header';
import Content from './Content';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f1f1f1;
  color: #333;
  font-family: 'PT Sans', sans-serif;
`;

export default class Times extends Component {
  render() {
    return (
    <Container>
      <TopBar />
      <Header />
      <Content />
    </Container>
    )
  }
}
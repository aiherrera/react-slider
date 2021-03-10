import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  place-content: center;
  padding: 0;
  margin: 0;
  height: 100vh;
`

const SliderContent = styled.div`
  &.slider-content {
    position: relative;
    width: 800px;
    height: 500px;
    border-radius: 5px;
    overflow: hidden;
  }
`

const Slides = styled.div`
  width: 500%;
  height: 500px;
  display: flex;
`

const Selector = styled.input(
  ({ position }) => `
    display: none;

    &:checked ~ .active {
      margin-left: ${position}%;
    }
  `
)
const selectorGenerator = (images) => {
  let position = 20
  return images.map((image, index) => {
    position -= 20
    return (
      <Selector
        key={index}
        id={'selector-' + index}
        name='radio-btn'
        type='radio'
        position={position}
      />
    )
  })
}

const Slide = styled.div`
  width: 20%;
  transition: all 2s;
  img {
    width: 800px;
    height: 500px;
  }
`
const slideGenerator = (images) => {
  return images.map((image, index) => {
    return (
      <Slide key={index} className={index === 0 ? 'active' : ''}>
        <img src={image} alt='' />
      </Slide>
    )
  })
}

const Text = styled.p(
  ({ textColor, backgroundColor }) => `
  position: absolute;
  bottom: 60px;
  display: flex;
  justify-content: center;
  width: 500px;
  height: 70px;
  margin: 0 20px;
  padding: 10px;
  color: ${textColor};
  border-left: 10px solid ${backgroundColor};
  background-color: ${backgroundColor};
  opacity: .7;
  border-radius: 0 5px 5px 0;
  line-height: 1.4;
`
)

const Navigation = styled.div(
  ({ color, vertical }) => `
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: ${vertical ? 'column' : 'row'};
  margin-top: ${vertical ? '0' : '-40px'};
  margin-bottom: ${vertical ? '40px' : '0'};
  top: ${vertical ? '50%' : 'auto'};
  transform: ${vertical ? 'translateY(-50%)' : 'none'};
  right: ${vertical ? '-380px' : 'auto'};
  width: 100%;

  label {
    border: 3px solid ${color};
    padding: 6px;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.4s;
    margin-right: 30px;
    margin-bottom: ${vertical ? '30px' : '0'};
    &:hover {
      background-color: ${color};
    }
  }
`
)

export {
  Container,
  SliderContent,
  Slides,
  Slide,
  Text,
  slideGenerator,
  selectorGenerator,
  Navigation
}

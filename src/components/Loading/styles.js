import styled, { keyframes } from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  z-index: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: rgba(49, 64, 76, 0.8);
  top: 0;
  left: 0;
`

const spin = keyframes`
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`

export const Load = styled.div`
  width: 75px;
  height: 75px;
  margin: 0;
  background: transparent;
  border-top: 4px solid #14229c;
  /* border-top: 4px solid #009688; */
  border-right: 4px solid transparent;
  border-radius: 50%;
  -webkit-animation: 1s ${spin} linear infinite;
  animation: 1s ${spin} linear infinite;
`

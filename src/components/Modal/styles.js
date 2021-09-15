import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: rgba(49, 64, 76, 0.8);
  top: 0;
  left: 0;
`

export const Modal = styled.div`
  position: relative;
  flex: 1;
  max-width: 45rem;
  min-height: 35rem;
  margin: 10rem 1rem 0 1rem;
  background-color: #ffffff;
  border-radius: 0.4rem;
  box-shadow: rgb(0 0 0 / 37%) 0px 1px 4px 0px;
`

export const Image = styled.img`
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  box-shadow: 0 1px 4px 0 rgb(0 0 0 / 37%);
  /* box-shadow: 0px 0px 6px 1px rgb(33 33 33 / 40%); */

  position: absolute;
  top: -80px;
  left: 50%;
  transform: translate(-50%, 0);
`
export const Close = styled.div`
  width: 3.6rem;
  height: 3.6rem;
  position: absolute;
  right: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`

export const Container = styled.div`
  width: 100%;
  height: 80%;
  padding: 2rem;
  margin-top: 7rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`
export const Name = styled.h2`
  text-align: center;
  font-size: 2rem;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 0 1rem;
  font-size: 1.6rem;
`

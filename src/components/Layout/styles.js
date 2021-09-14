import styled from 'styled-components'

export const Wrapper = styled.main`
  max-width: 96rem;
  min-height: 100vh;
  margin: 0 auto 5rem auto;
  padding: 0 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 560px) {
    font-size: 1.4rem;
    padding: 0 0.5rem;
  }
`

export const Header = styled.header`
  width: 100%;
  height: 8rem;

  display: flex;
  align-items: center;
  gap: 2rem;
`

export const Logo = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 0.4rem;
`

export const Title = styled.h1`
  flex: auto;
  color: #212121;
  font-size: 2.8rem;
`

export const Profile = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
`

export const Container = styled.div`
  width: 96%;
  /* min-height: 45rem; */

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  border-radius: 0.8rem;
  background-color: #ffffff;
  box-shadow: 0 1px 4px 0 rgb(0 0 0 / 37%);
  /* box-shadow: 1px 1px 10px 3px rgb(90 90 90 / 20%); */

  padding: 2rem 0;
`

export const Info = styled.p`
  font-size: 1.8rem;
  margin: 1rem;
  max-width: 75rem;
  font-weight: 500;
`

export const Table = styled.table`
  width: 95%;
  margin: 0 auto;
  color: #212121;
  overflow: hidden;
  border-radius: 0.4rem;

  border-collapse: collapse;
  font-size: 0.9em;
  font-family: sans-serif;
  box-shadow: 0px 0px 7px -4px #000000;

  & > thead > tr {
    background-color: #14229c;
    color: #ffffff;
    font-size: 1.6rem;
    text-align: center;
    text-transform: uppercase;
  }

  & > tbody > tr {
    font-size: 1.2rem;
    text-align: center;
    border-bottom: 1px solid #cccccc;
    text-transform: capitalize;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  & > tbody > tr:hover {
    background-color: rgba(156, 132, 132, 0.1);
  }

  & > tbody > tr:last-child {
    border-bottom: 1px solid transparent;
  }

  & th,
  & td {
    padding: 16px 15px;
    width: 33.3333333333%;
  }
`
export const Button = styled.button`
  width: 14rem;
  height: 4rem;
  border: transparent;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  color: #ffffff;
  background-color: #14229c;
  border-radius: 0.4rem;
  cursor: pointer;
  box-shadow: 0 1px 4px 0 rgb(0 0 0 / 37%);
  /* box-shadow: 0px 0px 6px -2px #000000; */

  transition: all 0.2s ease-in-out;
  &:hover {
    color: #14229c;
    background-color: transparent;
  }
`

export const Icon = styled.span`
  width: 2.5rem;
  height: 2.5rem;
  transform: rotate(170deg);
`
export const Text = styled.span``

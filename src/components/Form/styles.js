import styled from 'styled-components'

export const Form = styled.form`
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: right;
  gap: 1rem;
`

export const GroupInput = styled.div`
  & > input {
    width: 100%;
    height: 4rem;
    padding: 1rem;
    border: 0.1rem solid transparent;
    border-radius: 0.4rem;
    outline: none;
    box-shadow: 0 1px 4px 0 rgb(0 0 0 / 37%);
    /* box-shadow: 0px 0px 6px -2px #000000; */
  }

  & > input:focus {
    background-color: transparent;
    box-shadow: 0px 0px 7px -1px #0000ff;
    /* border: 0.1rem solid #14229c; */
  }
`

export const Select = styled.select`
  padding: 0 0.6rem;
  border: 0.1rem solid transparent;
  border-radius: 0.4rem;
  outline: none;
  box-shadow: 0 1px 4px 0 rgb(0 0 0 / 37%);
  /* box-shadow: 0px 0px 6px -2px #000000; */
`

import { GlobalContext } from 'context/GlobalContext'
import { useContext } from 'react'

import * as S from './styles'

const Form = () => {
  const { setFilterByName, setFilterByGender, setFilterByNat } =
    useContext(GlobalContext)
  const nats = [
    'AU',
    'BR',
    'CA',
    'CH',
    'DE',
    'DK',
    'ES',
    'FI',
    'FR',
    'GB',
    'IE',
    'IR',
    'NO',
    'NL',
    'NZ',
    'TR',
    'US'
  ]

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.GroupInput>
        <label htmlFor="text"></label>
        <input
          type="text"
          placeholder="Filter by name"
          onChange={({ target }) => setFilterByName(target.value)}
        />
      </S.GroupInput>
      <S.Select onChange={({ target }) => setFilterByGender(target.value)}>
        <option value="">Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </S.Select>
      <S.Select onChange={({ target }) => setFilterByNat(target.value)}>
        <option value="">NAT</option>
        {nats.map((nat, id) => (
          <option key={id} value={nat}>
            {nat}
          </option>
        ))}
      </S.Select>
    </S.Form>
  )
}

export default Form

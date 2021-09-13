import * as S from './styles'
import { useEffect, useRef } from 'react'

const Modal = ({ user, setModal, url }) => {
  const { picture, email, name, gender, dob, phone, nat, location, login } =
    user

  const ref = useRef(null)

  const changeClickedOutside = (event) => {
    if (ref.current === event.target) {
      document.body.style.overflow = 'auto'
      setModal(false)
    }
  }

  useEffect(() => {
    document.body.addEventListener('click', changeClickedOutside, true)
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.removeEventListener('click', changeClickedOutside, true)
    }
  })

  return (
    <S.Wrapper ref={ref}>
      <S.Modal>
        <S.Image src={picture.large} alt="Profile photo" />
        <S.Close
          onClick={() => {
            setModal(false)
            document.body.style.overflow = 'auto'
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
              fill="currentColor"
            />
          </svg>
        </S.Close>
        <S.Container>
          <S.Name>
            {name.first} {name.last}
          </S.Name>
          <S.Info>
            <span>
              <b>Email: </b> {email}
            </span>
            <span style={{ textTransform: 'capitalize' }}>
              <b>Gender: </b> {gender}
            </span>
            <span>
              <b>Birth Date: </b> {new Date(dob.date).toLocaleDateString()}
            </span>
            <span>
              <b>Phone Number: </b> {phone}
            </span>
            <span>
              <b>Nationality: </b> {location.country} ({nat})
            </span>
            <span>
              <b>Address: </b> {location.street.name}, {location.street.number}{' '}
              - {location.city}, {location.state}/{location.country}
            </span>
            <span>
              <b>ID: </b> {login.uuid}
            </span>
            <span>
              <b>Share: </b>{' '}
              <a
                href={
                  window.location.origin +
                  '/?' +
                  url.split('?')[1] +
                  '&user=' +
                  login.uuid
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                Link
              </a>
            </span>
          </S.Info>
        </S.Container>
      </S.Modal>
    </S.Wrapper>
  )
}

export default Modal

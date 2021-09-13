import * as S from './styles'
import { useContext } from 'react'
import { GlobalContext } from 'context/GlobalContext'
import Modal from 'components/Modal'
import Form from 'components/Form'
import Loading from 'components/Loading'
import { filter } from 'utils/filter'

const Layout = () => {
  const {
    url,
    users,
    setPaginator,
    user,
    setUser,
    modal,
    setModal,
    filterByName,
    filterByGender,
    filterByNat,
    loading
  } = useContext(GlobalContext)

  const openModal = (user) => {
    setModal(true)
    setUser(user)
  }

  return (
    <S.Wrapper>
      {loading && <Loading />}
      <S.Header>
        <S.Logo src="/img/coodesh.png" alt="Logo Coodesh" />
        <S.Title>Pharma Inc</S.Title>
        <S.Profile src="/img/gove.jpg" alt="Foto de perfil do administrador" />
      </S.Header>
      <S.Info>
        Hello collaborator! Welcome to the Pharm Inc panel, here you will find
        information about our customers, such as name, nationality, age and
        address.
      </S.Info>
      <S.Container>
        <Form />
        <S.Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Birth</th>
            </tr>
          </thead>

          <tbody>
            {users &&
              filter(users, filterByName, filterByGender, filterByNat).map(
                (user, id) => (
                  <tr key={id} onClick={() => openModal(user)}>
                    <td>
                      {user.name.first} {user.name.last}
                    </td>
                    <td
                      style={{
                        borderLeft: '1px solid #cccccc',
                        borderRight: '1px solid #cccccc'
                      }}
                    >
                      {user.gender}
                    </td>
                    <td>{new Date(user.dob.date).toLocaleDateString()}</td>
                  </tr>
                )
              )}
          </tbody>
        </S.Table>
        {modal && <Modal user={user} setModal={setModal} url={url} />}
        <S.Button
          onClick={() => {
            setPaginator((pag) => pag + 1)
          }}
        >
          <S.Icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ionicon"
              viewBox="0 0 512 512"
            >
              <title>Reload</title>
              <path
                d="M400 148l-21.12-24.57A191.43 191.43 0 00240 64C134 64 48 150 48 256s86 192 192 192a192.09 192.09 0 00181.07-128"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="32"
              />
              <path
                d="M464 97.42V208a16 16 0 01-16 16H337.42c-14.26 0-21.4-17.23-11.32-27.31L436.69 86.1C446.77 76 464 83.16 464 97.42z"
                stroke="currentColor"
                fill="currentColor"
              />
            </svg>
          </S.Icon>
          <S.Text>Loading more...</S.Text>
        </S.Button>
      </S.Container>
    </S.Wrapper>
  )
}
export default Layout

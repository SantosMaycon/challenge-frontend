import { createContext, useEffect, useState } from 'react'
import { queryToObject } from 'utils/queryToObject'

export const GlobalContext = createContext()

export function GlobalStorage({ children }) {
  // State Filter
  const [filterByName, setFilterByName] = useState('')
  const [filterByGender, setFilterByGender] = useState('')
  const [filterByNat, setFilterByNat] = useState('')

  // State Modal
  const [user, setUser] = useState({})
  const [modal, setModal] = useState(false)

  // State Fetch Config
  const [paginator, setPaginator] = useState(1)
  const [uniq, setUniq] = useState(true)
  let url = `https://randomuser.me/api/?page=${paginator}&results=50&seed=abc`

  // State Data List
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const loadData = async () => {
    let response
    let data
    setLoading(true)
    if (window.location.search && uniq) {
      let obj
      const query = queryToObject(window.location.search)
      for (let i = 0; i < +query.page; i++) {
        try {
          url = `https://randomuser.me/api/?page=${i + 1}&results=50&seed=abc`
          response = await fetch(url)
          data = await response.json()
          if (!response.ok) throw new Error(data.message)
        } catch {
          data = false
          setError(true)
          console.log('Deu error')
        } finally {
          obj = data.results.find((user) => user.login.uuid === query.user)
          if (obj) {
            setModal(false)
            setUser(obj)
            setModal(true)
          }
          setUsers((users) => [...users, ...data.results])
        }
      }
      setUniq(false)
    } else {
      try {
        response = await fetch(url)
        data = await response.json()
        if (!response.ok) throw new Error(data.message)
      } catch {
        data = false
        setError(true)
        console.log('Deu error')
      } finally {
        if (data) setUsers((users) => [...users, ...data.results])
      }
    }
    setLoading(false)
  }

  useEffect(() => {
    loadData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paginator])

  return (
    <GlobalContext.Provider
      value={{
        url,
        users,
        setUsers,
        paginator,
        setPaginator,
        user,
        setUser,
        modal,
        setModal,
        filterByName,
        setFilterByName,
        filterByGender,
        setFilterByGender,
        filterByNat,
        setFilterByNat,
        loading,
        error
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

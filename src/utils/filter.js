export const filter = (users, filterByName, filterByGender, filterByNat) => {
  return searchByName(
    searchBy(searchBy(users, 'nat', filterByNat), 'gender', filterByGender),
    filterByName
  )
}

const searchBy = (users, type, string) => {
  if (string)
    return users.filter(
      (user) => user[type].toLowerCase() === string.toLowerCase()
    )
  return users
}

const searchByName = (users, string) => {
  if (string)
    return users.filter((user) =>
      (user.name.first + ' ' + user.name.last)
        .toLowerCase()
        .includes(string.toLowerCase())
    )
  return users
}

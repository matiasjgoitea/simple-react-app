export const getItems = () => (
  new Promise(resolve => {
    resolve(JSON.parse(localStorage.getItem('marketList')) || [])
  })
)

export const addItem = str => (
  new Promise((resolve, reject) => {
    if(!str) reject(new Error('You need to pass a valid string to add an item'))
    getItems().then(items => {
      items.push(str)
      localStorage.setItem('marketList', JSON.stringify(items))
      resolve(items)
    })
  })
)

export const removeItem = index => (
  new Promise((resolve, reject) => {
    getItems().then(items => {
      if(!items[index]) reject(new Error('You need to pass a valid index position'))
      items.splice(index, 1)
      localStorage.setItem('marketList', JSON.stringify(items))
      resolve(items)
    })
  })
)

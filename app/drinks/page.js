import React from 'react'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'

const fetchDrinks = async (url) => {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const response = await fetch(url)
  const data = await response.json()
  return data
}

const DrinksPage = async () => {
  // const respone = await fetch(url)
  // const data = await respone.json()
  // console.log(data)
  const data = await fetchDrinks(url)
  console.log(data)
  return (
    <div>
      <h1 className="text-7xl">DrinksPage</h1>
    </div>
  )
}

export default DrinksPage

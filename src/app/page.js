"use client"
import React from 'react'
import ListContainer from './components/listContainer/ListContainer'
import useFetch from './hooks/useFetch'

const page = async () => {

  const { isLoading, err, data} = await useFetch(`https://602e7c2c4410730017c50b9d.mockapi.io/users`)
  return (
    <div className='container'>
      <div className='ListContainer'>
        <ListContainer 
          data={data}
          err={err}
          isLoading={isLoading}
        />
      </div>
    </div>
  )
}

export default page

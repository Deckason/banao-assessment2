import React, { useEffect, useState } from 'react'

const useFetch = async (url) => {
    const [isLoading, setisLoading] = useState(false)
    const [err, seterr] = useState(null)
    const [data, setdata] = useState(null)
  
   const getData = async() => {
    setisLoading(true)
    seterr(null)
    try {
        const response = await fetch(url)
        const json = await response.json()
            if (!response.ok) {
                seterr('Error fetching data')
                setisLoading(false)
            }
            if (response.ok) {
                setdata(json)
                seterr(null)
                setisLoading(false)
            }
    } catch (error) {
        seterr(error.message || 'Error fetching data')
        setisLoading(false)
    }finally{
        setisLoading(false)
    }
   }

   useEffect(()=>{
    getData()
   },[])

    return { isLoading, err, data}
  
}

export default useFetch

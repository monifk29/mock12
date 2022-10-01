import axios from 'axios';
import React, { useEffect } from 'react'


const TopComment = () => {


useEffect(() => {
getComment()
},[]);

const getComment = () =>{

    axios.get("https://jsonmock.hackerrank.com/api/articles").then((res) => console.log(res))
}

  return (
    <div>TopComment</div>
  )
}

export default TopComment
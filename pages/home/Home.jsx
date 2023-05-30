import React from 'react';
import Style from './home.module.css'

const Home = () => {
  console.log(Style);
  return (
<>
<h1 className={Style.home}>home</h1>
</>
  )
}

export default Home
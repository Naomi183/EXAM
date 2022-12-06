import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Home.module.css'
import Bounce from 'react-reveal/Bounce';

const Home = () => {
  return (
    <main className={classes.home}>
     <Bounce cascade>
      <div>
      <h1>Welcome to Naomi's GitHub repos!</h1>
     <h2>A place where my repos live!</h2>
     <h3>Click on any button and see where you land</h3>
      </div>
     </Bounce>
     <NavLink to='/Repos' ><button>{'See repos'}</button></NavLink>
    </main>
  )
}

export default Home
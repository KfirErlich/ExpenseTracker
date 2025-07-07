import React from 'react'
import LandingPage from '../components/LandingPage'

const HomePage = prop => {
    console.log('checking')
    return (!prop.isAuth ?  <LandingPage /> : <h1>Authenticated</h1>);
}

export default HomePage
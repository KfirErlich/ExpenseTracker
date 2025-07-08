import React from 'react'
import LandingPage from '../components/LandingPage'
import Card from '../../shared/components/UIElements/Card'

const HomePage = ({isAuth}) => {
    console.log('checking')
    return (
    <>
    <Card>
     <LandingPage/>
    </Card>
    </>
    )
}

export default HomePage
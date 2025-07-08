import React from 'react'

import Button from '../../shared/components/FormElements/Button'

const LandingPage = () => {
    return (
    <>
    <div className="center">
        <h1> ברוך הבא לאפליקצית מעקב ההוצאות שלך </h1>
    </div>
    <div className="center">
        <Button to="/auth">  ! הצטרף עכשיו  </Button>
    </div>
    </>
    )
}

export default LandingPage
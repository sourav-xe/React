import React from 'react'
import ProfileCard from './components/profileCard'

const App = () => {
  return (
    <>
     <ProfileCard  age = {21} location="Delhi"></ProfileCard>
      <ProfileCard name = "Shivam" age = {21} location="Delhi"></ProfileCard>
    </>
  )
}

export default App

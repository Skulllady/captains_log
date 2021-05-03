import React from 'react';
import './HomePage.css';
import SplashContainer from '../SplashContainer';
import DemoUser from '../DemoUser'

function HomePage() {

  return (
    <>
      <SplashContainer >
        <h1>Log it like Picard</h1>
        <p>Journaling helps us stay conscious of our internal dialogues.</p>
        <p>Captain's Log is a great tool to practice this because each new journal will have a few starter questions to help you get started!</p>
        <p>Give it a whirl as a demo user:</p>
        <DemoUser />
      </SplashContainer >
    </>
  )
}

export default HomePage;

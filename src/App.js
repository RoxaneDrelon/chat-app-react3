import React from 'react';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <Contact avatar="https://randomuser.me/api/portraits/men/22.jpg" name="Steven Dixon" isOnline online="online"/>
        <Contact avatar="https://randomuser.me/api/portraits/women/96.jpg" name="Crystal Gomez" online="offline"/>
        <Contact avatar="https://randomuser.me/api/portraits/women/92.jpg" name="Jessie Fleming" isOnline online="online"/>
      </React.StrictMode>
    </div>
  );
}

export default App;

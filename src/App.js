import React from 'react'
import NavBar from './components/NavBar/NavBar';
import './App.css';
import {action,originals,trending,comedy,horror,romance,documentaries} from './urls'
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Original' />
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={trending} title='Trending' isSmall />
      <RowPost url={comedy} title='Comedy' isSmall />
      <RowPost url={horror} title='Horror' isSmall />
      <RowPost url={romance} title='Romance' isSmall />
      <RowPost url={documentaries} title='Documentaries' isSmall />
    </div>
  );
}

export default App;

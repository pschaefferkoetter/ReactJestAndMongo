import React from 'react'

import { About, Header, Footer } from './container/index.jsx'
import './app.scss';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <About />
      <Footer />
    </div>
  )
}

export default App
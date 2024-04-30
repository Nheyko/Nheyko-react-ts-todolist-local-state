import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import GlobalStyle from './utils/style/GlobalStyle'
import { Header } from './components/Layout/Header'
import { Main } from './components/Layout/Main'
import { Footer } from './components/Layout/Footer'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <Header />
    <Main>
      <Home />
    </Main>
    <Footer />
  </React.StrictMode>,
)

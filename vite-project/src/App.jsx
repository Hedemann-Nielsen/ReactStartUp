import './App.scss'
import { Header } from './components/header/Header'
import { Main } from './components/main/main'
import { Footer } from './components/footer/Footer'
import { ContentWrapper } from './components/contentWrapper/ContentWrapper'


function App() {

 return (
    <>
      <Header></Header>
      <ContentWrapper title="Her er min sidetitle" description="en beskrivelse" > 
        <h2>Dette er sidens undertitle </h2>
      </ContentWrapper>
       
      <Main></Main>
      <Footer></Footer>
    </>
  )
}

export default App

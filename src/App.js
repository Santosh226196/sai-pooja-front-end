import Header from './component/Header'
import Footer from './component/Footer'
import {Container} from 'react-bootstrap'
import './bootstrap.min.css'
import HomeScreen from './screens/HomeScreen'
function App() {
  return (
    <div>
      <Header/>
      <main>
        <Container>

          <HomeScreen/>
          </Container>
      </main>
    
  <Footer/>
    </div>
  );
}

export default App;

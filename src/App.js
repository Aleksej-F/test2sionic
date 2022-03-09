// import { AppRouter } from './routes/AppRouter'
import { Header } from './components/header/Header'
// import { Footer } from './components/footer/Footer'
 import { SidePanel } from './components/side_panel/Side_panel'
 import { Footer } from './components/footer/Footer'
 
function App() {
  return (
    <div className="App">
      <Header />
      <SidePanel/>
      {/* <AppRouter /> */}
      <Footer />
      {/* <Modals /> */}
    </div>
  );
}

export default App;



import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'

import './App.scss'




function App() {

  const meyveler = ['banan', 'armud', 'heyva', 'gilas']


  return (

    <div>

      <div className='container'>
        <Header />
      </div>
      <h1 className='app-h1'>React sass</h1>

      {meyveler.map((meyve, index) => (
        <p key={index} className='fs-3 text-center'>{meyve}{index}</p>
      ))}


      <Footer />
    </div>
  )
}

export default App


import Header from './components/Header'
import Wall from './components/Wall'
import s from './style/App.module.scss'
import { FC } from 'react'





const App: FC = () => {



  return (
    <div className={s.App}>
      <Header />
      <div className={`${s.main} _container`}><Wall /></div>
    </div >
  )
}

export default App

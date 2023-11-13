
import FriendsBlock from './components/FriendsBlock/FriendsBlock'
import Header from './components/Header'
import NavBlock from './components/NavBlock'
import ProfileHeader from './components/ProfileHeader'
import Wall from './components/Wall'
import s from './style/App.module.scss'
import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'


const App: FC = () => {

  return (

    <div className={s.App}>
      <Header />
      <div className={`${s.main} _container`}>
        <NavBlock />
        <Routes>
          <Route path='/' element={<>
            <ProfileHeader />
            <Wall />
            <FriendsBlock />
          </>} />
          <Route path='/friends' element={<div>friends</div>} />
        </Routes>

      </div>
    </div >

  )
}

export default App

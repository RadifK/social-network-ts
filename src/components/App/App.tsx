import FriendsPage from '../FriendsPage/FriendsPage'
import Header from '../ProfilePage/ProfileHeader/Header'
import NavBlock from '../NavBlock/NavBlock'
import ProfilePage from '../ProfilePage/ProfilePage'
import s from './App.module.scss'
import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'


const App: FC = () => {

  return (

    <div className={s.App}>
      <Header />
      <div className={`${s.main} _container`}>
        <NavBlock />
        <Routes>
          <Route path='/' element={<ProfilePage />} />
          <Route path='/friends' element={<FriendsPage />} />
        </Routes>
      </div>
    </div >

  )
}

export default App

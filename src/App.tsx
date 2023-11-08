import FriendsBlock from './components/FriendsBlock'
import Header from './components/Header'
import NavBlock from './components/NavBlock'
import ProfileHeader from './components/ProfileHeader'
import Wall from './components/Wall'
import s from './style/App.module.scss'
import { FC } from 'react'





const App: FC = () => {



  return (
    <div className={s.App}>
      <Header />
      <div className={`${s.main} _container`}>
        <NavBlock />
        <ProfileHeader />
        <Wall />
        <FriendsBlock />
      </div>
    </div >
  )
}

export default App

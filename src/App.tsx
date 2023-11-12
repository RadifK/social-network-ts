
import FriendsBlock from './components/FriendsBlock'
import Header from './components/Header'
import NavBlock from './components/NavBlock'
import ProfileHeader from './components/ProfileHeader'
import Wall from './components/Wall'
import s from './style/App.module.scss'
import { FC } from 'react'
import type { RootState } from './redux/store'
import { useSelector, useDispatch } from 'react-redux'

const App: FC = () => {

  const count = useSelector((state: RootState) => {

  })
  const dispatch = useDispatch()

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

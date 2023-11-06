
import Wall from './components/Wall'
import s from './style/App.module.scss'
import { FC } from 'react'





const App: FC = () => {



  return (
    <div className={s.App}>
      <Wall />
    </div>
  )
}

export default App

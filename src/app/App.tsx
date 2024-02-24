import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './assets/css/App.scss'
import NavList from "../shared/ui/nav/navList";
import Button from "../shared/ui/buttons/button";
import Search from "../shared/ui/search/search";
import ButtonIcon from "../shared/ui/buttonIcon/buttonIcon";
import ImageIcon from "../shared/ui/icons/ImageIcon";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Button text={'Click me'} rounded={'full'}/>
        <Search value={''} onChange={() => {}} />
        <ButtonIcon >
          <ImageIcon />
        </ButtonIcon>
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

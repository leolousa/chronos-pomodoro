import './styles/theme.css'
import './styles/global.css'
import { Heading } from './components/Heading/Heading'
import { TimerIcon } from 'lucide-react'

export function App() {
  return (
    <>
      <Heading>
        Olá Mundo!
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
        consectetur numquam, quod eveniet et nemo quibusdam, sint fugiat earum
        fuga quasi repellat magnam quam commodi ad eligendi rerum laborum ut?
      </p>
    </>
  )
}

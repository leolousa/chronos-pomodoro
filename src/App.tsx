import './styles/theme.css'
import './styles/global.css'
import { Container } from './components/Container'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'
import { CountDown } from './components/CountDown'
import { DefautInput } from './components/DefaultInput'
import { Cycles } from './components/Cycles/Cycles'
import { DefaultButton } from './components/DefaultButton'
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react'

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <form action='' className='form'>
          <div className='formRow'>
            <DefautInput
              labelText='Task'
              id='meuInput'
              type='text'
              placeholder='Digite algo'
            />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <Cycles />
          </div>

          <div className='formRow'>
            <DefaultButton icon={<PlayCircleIcon />} color='green' />
          </div>
        </form>
      </Container>
    </>
  )
}

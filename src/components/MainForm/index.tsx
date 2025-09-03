import { PlayCircleIcon } from 'lucide-react'
import { Cycles } from '../Cycles/Cycles'
import { DefaultButton } from '../DefaultButton'
import { DefautInput } from '../DefaultInput'

export function MainForm() {
  return (
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
  )
}

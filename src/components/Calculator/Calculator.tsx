import { memo, useCallback, useState } from 'react'

import { Typography } from '@mui/material'
import { Box } from '@mui/system'

import { Btn, Wrapper } from './styles'

interface IBaseComponentProps {
  children?: React.ReactNode
}

const Calculator: React.FC<IBaseComponentProps> = ({ children }) => {
  const characters = [
    'AC',
    '+/-',
    '%',
    '/',
    7,
    8,
    9,
    'x',
    4,
    5,
    6,
    '-',
    1,
    2,
    3,
    '+',
    0,
    ',',
    '*',
    '=',
  ]
  const [num, setNum] = useState(0)

  const handleInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const input = e.target.value
      setNum(num + input)
    },
    [num],
  )

  return (
    <>
      <Typography variant="h3" style={{ textAlign: 'center' }}>
        CALCULATOR
      </Typography>
      <Wrapper maxWidth="xs">
        <h1 className="result">{num}</h1>
        <Box>
          {characters.map((character) => (
            <Btn
              type="button"
              key={character}
              value={character}
              onClick={handleInput}
            >
              {character}
            </Btn>
          ))}
        </Box>
      </Wrapper>
    </>
  )
}

export default memo(Calculator)

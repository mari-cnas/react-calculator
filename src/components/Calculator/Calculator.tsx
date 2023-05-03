import { memo, useCallback, useState } from 'react'

import { Typography } from '@mui/material'
import { Box } from '@mui/system'

import { Btn, Wrapper } from './styles'

interface IBaseComponentProps {
  children?: React.ReactNode
}

const Calculator: React.FC<IBaseComponentProps> = ({ children }) => {
  const [num, setNum] = useState(0)
  const [oldNum, setOldNum] = useState(0)
  const [operator, setOperator] = useState()

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const input = event.target.value
    if (num === 0) {
      setNum(input)
    } else {
      setNum(num + input)
    }
  }

  const handleClear = (): [
    number,
    React.Dispatch<React.SetStateAction<number>>,
  ] => {
    setNum(0)
    return [num, setNum]
  }

  const porcentage = (): [
    number,
    React.Dispatch<React.SetStateAction<number>>,
  ] => {
    setNum(num / 100)
    return [setNum]
  }

  const changeSign = (): [
    number,
    React.Dispatch<React.SetStateAction<number>>,
  ] => {
    if (num > 0) {
      setNum(-num)
    } else {
      setNum(Math.abs)
    }
    return [setNum]
  }

  const operatorHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const operatorInput = event.target.value
    setOperator(operatorInput)
    setOldNum(num)
    setNum(0)
  }

  const calculate = (): [
    number,
    React.Dispatch<React.SetStateAction<number>>,
  ] => {
    if (operator === '/') {
      setNum(Number(oldNum) / Number(num))
    } else if (operator === 'x') {
      setNum(Number(oldNum) * Number(num))
    } else if (operator === '+') {
      setNum(Number(oldNum) + Number(num))
    } else if (operator === '-') {
      setNum(Number(oldNum) - Number(num))
    }
  }

  return (
    <>
      <Typography variant="h3" style={{ textAlign: 'center' }}>
        CALCULATOR
      </Typography>
      <Wrapper maxWidth="xs">
        <h1 className="result">{num}</h1>
        <Box>
          <Btn type="button" value={7} onClick={handleClear}>
            AC
          </Btn>
          <Btn type="button" value={7} onClick={changeSign}>
            +/-
          </Btn>
          <Btn type="button" value={7} onClick={porcentage}>
            %
          </Btn>
          <Btn type="button" value="/" onClick={operatorHandler}>
            /
          </Btn>
          <Btn type="button" value={7} onClick={handleInput}>
            7
          </Btn>
          <Btn type="button" value={8} onClick={handleInput}>
            8
          </Btn>
          <Btn type="button" value={9} onClick={handleInput}>
            9
          </Btn>
          <Btn type="button" value="x" onClick={operatorHandler}>
            x
          </Btn>
          <Btn type="button" value={4} onClick={handleInput}>
            4
          </Btn>
          <Btn type="button" value={5} onClick={handleInput}>
            5
          </Btn>
          <Btn type="button" value={6} onClick={handleInput}>
            6
          </Btn>
          <Btn type="button" value="-" onClick={operatorHandler}>
            -
          </Btn>
          <Btn type="button" value={1} onClick={handleInput}>
            1
          </Btn>
          <Btn type="button" value={2} onClick={handleInput}>
            2
          </Btn>
          <Btn type="button" value={3} onClick={handleInput}>
            3
          </Btn>
          <Btn type="button" value="+" onClick={operatorHandler}>
            +
          </Btn>
          <Btn type="button" value={0} onClick={handleInput}>
            0
          </Btn>
          <Btn type="button" value="." onClick={handleInput}>
            ,
          </Btn>
          <Btn type="button" value={0} onClick={operatorHandler}>
            *
          </Btn>
          <Btn type="button" value="=" onClick={calculate}>
            =
          </Btn>
        </Box>
      </Wrapper>
    </>
  )
}

export default memo(Calculator)

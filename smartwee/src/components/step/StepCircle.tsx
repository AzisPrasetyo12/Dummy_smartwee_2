import { Circle, Icon, SquareProps } from '@chakra-ui/react'
import { HiCheck } from 'react-icons/hi'

interface RadioCircleProps extends SquareProps {
  isCompleted: boolean
  isActive: boolean
}

export const StepCircle = ({ isCompleted, isActive, ...rest }: RadioCircleProps) => {
  return (
    <Circle
      {...rest}
      size="8"
      bg={isCompleted ? 'accent' : 'inherit'}
      borderWidth={isCompleted ? '0' : '2px'}
      borderColor={isActive ? 'accent' : 'inherit'}
      className="bg-blue-700"
    >
      {isCompleted ? (
        <Icon as={HiCheck} color="fg.inverted" boxSize="5" />
      ) : (
        <Circle bg={isActive ? 'accent' : 'border'} size="1" />
      )}
    </Circle>
  )
}

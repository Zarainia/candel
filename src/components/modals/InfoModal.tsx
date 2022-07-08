import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the word in 6 tries. After each guess, the color of the tiles will
        change to show how close your guess was to the word.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="Z"
          status="correct"
        />
        <Cell value="Λ" />
        <Cell value="N" />
        <Cell value="N" />
        <Cell value="Λ" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter Z is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="B" />
        <Cell value="L" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="Λ"
          status="present"
        />
        <Cell value="R" />
        <Cell value="Σ" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter Σ is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="Y" />
        <Cell value="I" />
        <Cell value="Ф" />
        <Cell isRevealing={true} isCompleted={true} value="П" status="absent" />
        <Cell value="S" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter П is not in the word in any spot.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        This is an open source version of the word guessing game we all know and
        love, forked from <a href="https://github.com/cwackerfuss/react-wordle" className="underline font-bold">here</a> -{' '}
        <a
          href="https://github.com/Zarainia/candel"
          className="underline font-bold"
        >
          check out the code here
        </a>{' '}
      </p>
    </BaseModal>
  )
}

import React from 'react'
import { ResumeItem } from '../ResumeItem'
import * as C from './styles'

import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign,
} from 'react-icons/fa'

export const Resume = ({ income, expense, total }) => {
    return (
      <C.Container>
        <ResumeItem
          title="Input"
          Icon={FaRegArrowAltCircleUp}
          value={income}
        />
        <ResumeItem
          title="Output"
          Icon={FaRegArrowAltCircleDown}
          value={expense}
        />
        <ResumeItem title="Total" Icon={FaDollarSign} value={total} />
      </C.Container>
    );
  };
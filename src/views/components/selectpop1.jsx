import React from 'react'
import "./select_pop1.css"

const SelectPop1 = (props) => {
  return (
    <div>
    <div className='popup1' onClick={props.onPop1Click} style={{ visibility: props.vis }} >{props.pop1}</div>
    <div className='popup2' onClick={() => { props.trueAnswer(); props.returnAnswer();props.stage1Round(); }} style={{ visibility: props.vis}}>{props.pop2}</div>
    </div>
  )
}

export default SelectPop1

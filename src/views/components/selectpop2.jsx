import React from 'react'
import "./select_pop2.css"
const SelectPop2 = (props) => {
  return (
    <div>
    <div className='popup11' onClick={props.onPop1Click} style={{ visibility: props.vis }} >{props.pop11}</div>
    <div className='popup22' onClick={() => { props.trueAnswer(); props.returnAnswer();props.stage1Round(); }} style={{ visibility: props.vis}}>{props.pop22}</div>
    </div>
  )
}

export default SelectPop2

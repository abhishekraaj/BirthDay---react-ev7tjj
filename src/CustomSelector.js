import React from "react"

export default function CustomSelector({Array,defaulttext , onChange}){
  return(
    <div>
      <select onChange={onChange}>
        <option>{defaulttext}</option>
        {Array.map((e)=> <option>{e}</option>)}
        </select>
      </div>
  )
}
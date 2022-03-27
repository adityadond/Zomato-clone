import React from 'react'
import FilterItem from './filterItem/FilterItem'
import './filters.css'

function Filters({filterLists}) {
  return (
    <div className='filters'
    >{filterLists && filterLists.map((filter)=>{
return<FilterItem filter={filter} key={filter.id}/>
    }) }</div>
  )
}

export default Filters
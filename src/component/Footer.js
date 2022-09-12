import React from 'react'

import { VisibilityFilters } from '../action'
import FilterLink from '../container/FilterLink'
const Footer = () => (
  <div>
    <span>Show: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      All
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
      Active
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETE}>
      Completed
    </FilterLink>
  </div>
)

export default Footer
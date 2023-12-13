import {BsFilterRight} from 'react-icons/bs'

import './index.css'

const ProductsHeader = props => {
  const {changeSortby, changeInput} = props
  const onChangeSortby = event => {
    changeSortby(event.target.value)
  }

  const onChangeInput = event => {
    if (event.key === 'Enter') {
      changeInput(event.target.value)
    }
  }
  const {sortbyOptions, activeOptionId} = props

  return (
    <div className="products-header">
      <input placeholder="Search" type="search" onKeyDown={onChangeInput} />
      <h1 className="products-list-heading">All Products</h1>
      <div className="sort-by-container">
        <BsFilterRight className="sort-by-icon" />
        <p className="sort-by">Sort by</p>
        <select
          className="sort-by-select"
          value={activeOptionId}
          onChange={onChangeSortby}
        >
          {sortbyOptions.map(eachOption => (
            <option
              key={eachOption.optionId}
              value={eachOption.optionId}
              className="select-option"
            >
              {eachOption.displayText}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default ProductsHeader

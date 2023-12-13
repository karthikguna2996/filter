import './index.css'

const CategoryItem = props => {
  const {details, clickCategory} = props
  const {name, categoryId} = details

  const onClickCategory = () => {
    clickCategory(categoryId)
  }

  return (
    <li>
      <button type="button" onClick={onClickCategory}>
        <p> {name} </p>
      </button>
    </li>
  )
}

const RatingItem = rops => {
  const {detail, clickRating} = rops
  const {ratingId, imageUrl} = detail

  const onCLickRating = () => {
    clickRating(ratingId)
  }
  const k = `rating ${ratingId}`
  return (
    <li>
      <button type="button" onClick={onCLickRating}>
        <img src={imageUrl} alt={k} className="filImg" />
      </button>
    </li>
  )
}

const FiltersGroup = props => {
  const {
    categoryList,
    ratingList,
    clickCategory,
    clickRating,
    clickClearFilters,
  } = props

  const onclickClearFilters = () => {
    clickClearFilters()
  }

  return (
    <div className="filters-group-container">
      <h1>Category</h1>
      <ul>
        {categoryList.map(eachItem => (
          <CategoryItem
            details={eachItem}
            clickCategory={clickCategory}
            key={eachItem.categoryId}
          />
        ))}
      </ul>
      <ul>
        {ratingList.map(eachItem => (
          <RatingItem
            detail={eachItem}
            key={eachItem.ratingId}
            clickRating={clickRating}
          />
        ))}
      </ul>
      <button type="button" onClick={onclickClearFilters}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup

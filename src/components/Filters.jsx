import style from './../assets/style/components/filters.module.styl'

function Filters({setSearch, setFilter}) {
  const options = [
    {value: 'strMeal', text: 'Name'},
    {value: 'idMeal', text: 'Identifier'}
  ]

  return (
      <div className={style.AppFilters}>
        <input className={style.AppSearch} type="text" id="search" placeholder="Search recipes and more..." onChange={(e) => {setSearch(e.target.value)}}/>

        <div className={style.AppFilterContainer} >
          <label>Sort by:</label>
          <select className={style.AppFilter} id="filter" onChange={(e) => {
            setFilter(e.target.value)
          }}>
            {options.map((option, key) => {
              return <option key={key} value={option.value}>{option.text}</option>
            })}
          </select>
        </div>
      </div>
  )
}

export default Filters

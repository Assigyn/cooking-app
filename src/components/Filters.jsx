import style from './../assets/style/components/filters.module.styl'

function Filters({setSearch, setFilter}) {
  const options = [
    {value: 'strMeal', text: 'Sort by: Name'},
    {value: 'idMeal', text: 'Sort by: Identifier'}
  ]

  return (
      <div className={style.AppFilters}>
        <input className={style.AppSearch} type="text" id="search" placeholder="Search recipes and more..." onChange={(e) => {setSearch(e.target.value)}}/>

        <select className={style.AppFilter} id="filter" onChange={(e) => {setFilter(e.target.value)}}>
          {options.map((option, key) => { return <option key={key} value={option.value}>{option.text}</option> })}
        </select>
      </div>
  )
}

export default Filters

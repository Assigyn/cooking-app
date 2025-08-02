import style from './../assets/style/components/filters.module.styl'
import {useEffect, useRef} from "react";

function Filters({setSearch, setFilter, filter}) {
  const options = [
    {value: 'strMeal', text: 'Name'},
    {value: 'idMeal', text: 'Identifier'}
  ]

     const menuRef = useRef(null)
     const containerRef = useRef(null)

     function displayMenu(e) {
       e.preventDefault();
       let menu = document.getElementById('filter-menu');
       menu.style.display = window.getComputedStyle(menu).display === "none" ? "block" : "none";
     }

    function getTextFromValue(value) {
        const option = options.find(opt => opt.value === value)
        return option ? option.text : null
    }

    useEffect(() => {
    function handleClickOutside(e) {
        const menu = menuRef.current
        const container = containerRef.current

        if (!menu || !container) return

        const isDisplayed = window.getComputedStyle(menu).display === "block"

        if (isDisplayed && !container.contains(e.target)) {
            menu.style.display = 'none'
        }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
        document.removeEventListener("mousedown", handleClickOutside)
    }
}, [])

  return (
      <div className={style.AppFilters}>
        <input className={style.AppSearch} type="text" id="search" placeholder="Search recipes and more..." onChange={(e) => {setSearch(e.target.value)}}/>

        <div className={style.AppFilterContainer} id="filter" ref={containerRef}>
                <button onClick={(e) => {displayMenu(e)}}>
                    Sort by : <span>{getTextFromValue(filter)}</span>
                </button>

                <ul id="filter-menu" ref={menuRef}>
                    {options.map((option, key) => {
                        return <li key={key} value={option.value } onClick={() => {setFilter(option.value)}}>{option.text}</li>
                    })}
                </ul>
            </div>
        </div>
  )
}

export default Filters

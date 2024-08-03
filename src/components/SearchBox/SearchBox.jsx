
import css from "./SearchBox.module.css"
const SearchBox = ({inputValue, setInputValue}) => {
    const handleChange =(event)=>{
        setInputValue(event.target.value)
        console.log(inputValue)
    }
    return(
        <div className={css.wrapper}>
            <span>Find contacts by name</span>
            <input type="text" onChange={handleChange} className={css.input}/>
        </div>
    )
}


export default SearchBox;
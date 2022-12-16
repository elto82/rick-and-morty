import a from '../SearchBar.module.css'

export default function SearchBar(props) {
   return (
      <div>
      <input className={a.input} type='search' />
         <button className={a.button} onClick={props.onSearch}>Agregar</button> 
      </div>
   );
}

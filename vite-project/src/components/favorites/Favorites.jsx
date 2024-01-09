import style from './Favorites.module.scss';

export const Favorites = props => {
  return (
    <ul className={style.list}>
      {props.data && props.data.map((item, itemIndex) => {
        return <li key={itemIndex}>{item}</li>
        }
      )}
    </ul>
  )
}
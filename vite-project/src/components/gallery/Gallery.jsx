import style from './Gallery.module.scss';

export const Gallery = props => {
  return (
    <div className={style.galleri}>
      {props.pictures && props.pictures.map((picture, index) => (
        <img 
            key={index} 
            src={picture} 
            // alt={`Billede ${picture}`} 
            // title={`${picture.substr(picture.lastIndexOf('/')+1).replace('.jpg',"")}`}
            />
            
      ))}
    </div>
  );
};

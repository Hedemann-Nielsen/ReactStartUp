
import style from './Welcome.module.scss';

export const Welcome = props => {
    const { name } = props;
  
    return (
      <p className={style.hello}>Hello {name}</p>
    );
    }
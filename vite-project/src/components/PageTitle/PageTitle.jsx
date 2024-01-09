import style from './PageTitle.module.scss';

export const PageTitle = props => {
return (
    <>
    <h2 className={style.undertitle}>{props.pagetitle}</h2>
    <p className={style.undertitle2}>{props.undertitle}</p>
    </>
);
}
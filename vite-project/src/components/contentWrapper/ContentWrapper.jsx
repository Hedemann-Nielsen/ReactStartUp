import style from './ContentWrapper.module.scss';

export const ContentWrapper = ({ title, children, description }) => {
  document.title = title;
  document.querySelector('meta[name="description"]').setAttribute("content", description)
  return (
    <>
      <div className={style.ContentWrapper}>
        <h1>{title}</h1>
        <>{children}</>
        </div>
      </>
    )
  }

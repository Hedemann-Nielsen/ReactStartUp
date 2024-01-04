export const Favorites = props => {
    return (
      <>
      <h3>My top 5 favorites</h3>
      {props.data.map((category, categoryIndex) => (
        <div key={categoryIndex}>
          <h4>{category.type}</h4>
          <ul>
            {category.data.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
    );
  };
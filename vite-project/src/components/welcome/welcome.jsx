// export const Welcome = props => {
//     return (
//       <ul>
//           <h2>Hello</h2>
//         {props.data.map((item, key) => {
//           return (
//             <li key={key}> {item}</li>
        
//           );
//         })}
//       </ul>
//     );
//   };

export const Welcome = props => {
    const { name } = props;
  
    return (
      <p>Hello {name}</p>
    );
    }
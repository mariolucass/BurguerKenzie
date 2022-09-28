export const Product = (props) => {
  function addCart() {}

  return (
    <li>
      <div className="imgDiv">
        <img src={props.img} alt={props.title} />
      </div>
      <div className="textDiv">
        <h2>{props.title}</h2>
        <span>{props.type}</span>
        <span>{props.price}</span>
        <button onClick={addCart}>Adicionar</button>
      </div>
    </li>
  );
};

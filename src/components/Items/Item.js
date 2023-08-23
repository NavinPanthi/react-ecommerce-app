const Item = ({ item }) => {
  return (
    <div className="w-44 h-54">
      <img
        src={item.image}
        alt="representation of a product"
        className="h-52"
      />
      <p className="">{item.title}</p>
      <div>{item.price}</div>
      <div>Rating: {item.rating.rate}({item.rating.count})</div>
    </div>
  );
};
export default Item;

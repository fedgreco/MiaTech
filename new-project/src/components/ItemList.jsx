const ItemList = (props) => {
  
  console.log(props);
  
  return (
    <>
      <ul>
        {
          props.data.map((game, index) => (
            <li key={`games-item-${index}`}>{game}</li>
          ))
        }
      </ul>
    </>
  )
}

export default ItemList;
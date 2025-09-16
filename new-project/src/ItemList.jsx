const ItemList = () => {
  const data = ["Zelda", "Super Mario", "Pac-Man", "Star Wars"];
  
  return (
    <>
      <ul>
        {
          data.map((game, index) => (
            <li key={`games-item-${index}`}>{game}</li>
          ))
        }
      </ul>
    </>
  )
}

export default ItemList;
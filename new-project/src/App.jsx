import ItemList from "./components/ItemList";

const App = () => {
    const games = ["Zelda", "Super Mario", "Pac-Man", "Star Wars"];
    return (
        <>
            <ItemList data={games} />
        </>
    )
}

export default App;
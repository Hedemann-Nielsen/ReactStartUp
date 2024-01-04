import { PageTitle } from "../PageTitle/PageTitle"
import { List } from "../list/List"
import { Welcome } from "../welcome/welcome"
import { Favorites } from "../favorites/Favorites"

const arrItems = [
    'Tim', 'Kasper', 'Heinz', 'Bo'
]

const favoritDishes = [
    'Pizza', 'Sushi', 'Burgers', 'Pasta', 'Chocolate Cake'
]
const favoritMovies = [
    'The Shawshank Redemption', 'The Godfather', 'The Dark Knight', 'Pulp Fiction', 'Inception'
]
const allFavorits = [
    {type: 'Dishes', data: favoritDishes},
    {type: 'Movies', data: favoritMovies}
]
// const names = [
//     'Alice', 'Bob', 'Charlie', 'David', 'Eva'
// ]

export const Main = () => {
    return(
    <main>
        <PageTitle 
            pagetitle="Velkommen til min side"
            hest ="om en hest">
        </PageTitle>
        <Welcome name="Alice"></Welcome>
        <Welcome name="Bob"></Welcome>
        <Welcome name="Charlie"></Welcome>
        <Favorites data={allFavorits}></Favorites>
        <List data={arrItems}></List>
        <p>Jeg startede mit første React-projekt i dag. Spændende rejse ind i en ny frontend-verden</p>
    </main>
    
    )
}

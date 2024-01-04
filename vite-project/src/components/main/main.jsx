import { PageTitle } from "../PageTitle/PageTitle"
import { Welcome } from "../welcome/welcome"
import { Favorites } from "../favorites/Favorites"
import style from './Main.module.scss';



const favoritDishes = [
    'Pizza', 'Sushi', 'Burgers', 'Pasta', 'Chocolate Cake'
]
const favoritMovies = [
    'The Shawshank Redemption', 'The Godfather', 'The Dark Knight', 'Pulp Fiction', 'Inception'
]

export const Main = () => {
    return(
    <main className={style.main} >
        <PageTitle 
            pagetitle="Dette er mit første react project"
            undertitle="her prøver jeg lidt forskellige ting af">
        </PageTitle>
        <Welcome name="Alice"></Welcome>
        <Welcome name="Bob"></Welcome>
        <Welcome name="Charlie"></Welcome>
        <h6>My favorite dishes</h6>
        <Favorites data={favoritDishes}></Favorites>
        <h6>My favorite movies</h6>
        <Favorites data={favoritMovies}></Favorites>
    </main>
    
    )
}

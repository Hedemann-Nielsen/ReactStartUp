
import { ContentWrapper } from '../../components/contentWrapper/ContentWrapper';
import { PageTitle } from "../../components/PageTitle/PageTitle";
import { Welcome } from "../../components/welcome/welcome";
import { Favorites } from "../../components/favorites/Favorites";
import style from './Home.module.scss';
import { Gallery } from "../../components/gallery/gallery";
import { Counter } from "../../components/counter/counter";

const arrPictures = [
    './src/assets/images/bird.jpg',
    './src/assets/images/butterflyes.jpg',
    './src/assets/images/cherry.jpg',
    './src/assets/images/fall-forest.jpg',
    './src/assets/images/flower1.jpg',
    './src/assets/images/flower2.jpg',
    './src/assets/images/forrest.jpg',
    './src/assets/images/green-nature.jpg',
    './src/assets/images/northern-light.jpg',
    './src/assets/images/sunset.jpg',
    './src/assets/images/sunset2.jpg',
    './src/assets/images/feather.jpg'
 ];

 const favoritDishes = [
    'Pizza', 'Sushi', 'Burgers', 'Pasta', 'Chocolate Cake'
]
const favoritMovies = [
    'The Shawshank Redemption', 'The Godfather', 'The Dark Knight', 'Pulp Fiction', 'Inception'
]

export const Home =  ({children}) => {
  return (
    <ContentWrapper title="Her er min sidetitle" description="en beskrivelse" > 
    <h2>Dette er sidens undertitle </h2>
    <main className={style.main} >
        {children}
        <PageTitle 
            pagetitle="Dette er mit første react project"
            undertitle="her prøver jeg lidt forskellige ting af">
        </PageTitle>
        <Counter></Counter>
        <Welcome name="Alice"></Welcome>
        <Welcome name="Bob"></Welcome>
        <Welcome name="Charlie"></Welcome>
        <h6>My favorite dishes</h6>
        <Favorites data={favoritDishes}></Favorites>
        <h6>My favorite movies</h6>
        <Favorites data={favoritMovies}></Favorites>
        <h6>My photo gallery</h6>
        <Gallery pictures={arrPictures}></Gallery> 
    </main>
  </ContentWrapper>
  );
}

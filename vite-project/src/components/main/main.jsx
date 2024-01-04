import { PageTitle } from "../PageTitle/PageTitle"
import { List } from "../list/List"
import { Welcome } from "../welcome/welcome"

 const arrItems = [
    'Tim', 'Kasper', 'Heinz', 'Bo'
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
        <List data={arrItems}></List>
        <p>Jeg startede mit første React-projekt i dag. Spændende rejse ind i en ny frontend-verden</p>
    </main>
    
    )
}

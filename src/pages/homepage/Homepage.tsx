import people from '../../assets/homepage/people.svg'
import menu from '../../assets/homepage/menu.svg'
import scraps from '../../assets/homepage/scraps.svg'


import { Card } from './Card'
import { Header } from '../../components/Header'

function HomePage() {

  return (
    <>
        <Header
          title={"Homepage"}
        />
        <Card 
            link={"/people"}
            text={"find your people"}
            img={people}
        />
        <Card 
            link={"/menu"}
            text={"create your menu"}
            img={menu}
        />
        <Card 
            text={"home your scraps"}
            img={scraps}
        />
    </>
  )
}

export default HomePage

import people from '../../assets/homepage/people.svg'
import menu from '../../assets/homepage/menu.svg'
import scraps from '../../assets/homepage/scraps.svg'


import { Card } from './card'
import { Header } from '../../components/Header'

function HomePage() {

  return (
    <>
        <Header
          title={"Homepage"}
        />
        <Card 
            link={"/browsemenus"}
            text={"find a menu"}
            img={people}
        />
        <Card 
            link={"/menu"}
            text={"create your menu"}
            img={menu}
        />
        <Card 
            text={"scraps help"}
            img={scraps}
        />
    </>
  )
}

export default HomePage

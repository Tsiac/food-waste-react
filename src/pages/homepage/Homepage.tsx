import people from '../../assets/homepage/people.svg'
import menu from '../../assets/homepage/menu.svg'
import scraps from '../../assets/homepage/scraps.svg'

import { Card } from './card'

function HomePage() {

  return (
    <>
        <Card 
            text={"find your people"}
            img={people}
        />
        <Card 
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

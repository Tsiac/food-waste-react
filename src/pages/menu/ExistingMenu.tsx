import {useParams} from "react-router-dom";

const {id} = useParams(); 

const ExistingMenu = () => {

    return <>
        <div>ExistingMenu</div>
        <div>id: {id}</div>
    </>
}


export default ExistingMenu;

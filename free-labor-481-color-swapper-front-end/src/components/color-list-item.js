import { Color } from './color'

function ColorListItem({ color }){
    return (    
        <>
            <p>Color List</p>
            <p>{color.name}</p>
        </>
    )
}

export default ColorListItem
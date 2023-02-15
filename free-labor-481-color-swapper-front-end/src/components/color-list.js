import { Color } from './color'

function ColorList({ color }){
    return (
        <>
            <p>Color List</p>
            <p>{color.name}</p>
        </>
    )
}

export default ColorList
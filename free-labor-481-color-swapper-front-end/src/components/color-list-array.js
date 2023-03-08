import { Color } from './color'

function ColorListArray({ colorList }){
    // for(let i=0; i<colorList.length; i++){
        
    // }

    // let div_element = document.createElement("ul");

    // let div_elem = document.getElementById("divele");

    // let child_p_elem = document.createElement("li");

    // div_elem.appendChild(child_p_elem)

    // React.cloneElement();
    return (    
        <>
            <p>Color List Array</p>
            <p>{colorList[0].name}</p>
        </>
    )
}

export default ColorListArray
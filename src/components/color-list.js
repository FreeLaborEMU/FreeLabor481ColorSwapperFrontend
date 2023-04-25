import { Color } from './color'
import styles from '../styles/feature3.module.css'


/*
* Kudos to Austin Clute, who helped me write this.
* Hire this guy:
* https://github.com/Shausti
*/ 

function componentToHex(c) {
  let hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  // console.log("#" + componentToHex(r) + componentToHex(g) + componentToHex(b));
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}


  function ColorList({colorList}) {
    return (
      <ul className={styles.colorList}>
        {colorList.map((color) => <ColorListItem color={color} key={color.name}/>)}
      </ul>
    );
  }
  
  function ColorListItem({color}) {
    return (
      <li className={styles.colorListItem} onClick={handleClick(rgbToHex(Number(color.redValue), Number(color.greenValue), Number(color.blueValue)))}>
      {/* <li className={styles.colorListItem}> */}

        {/* Have to cast to Number, since stored as a string in the data object right now */}
        <div className={styles.box} style={{backgroundColor: rgbToHex(Number(color.redValue), Number(color.greenValue), Number(color.blueValue))}}></div>
        <p>{color.name}, R:{color.redValue}, G:{color.greenValue}, B:{color.blueValue}</p>
      </li>
    );
  }

  const handleClick = async (redValue, greenValue, blueValue) => {
    // const response = await fetch('http://localhost:8080/colorConversion/keepColorFromOriginal', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ redValue, greenValue, blueValue })
    // });
    // There is no response yet
    // const data = await response.json();
    // handle response data
  }


  export default ColorList
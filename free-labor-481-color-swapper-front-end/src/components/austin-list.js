import { Color } from './color'
import styles from '../styles/feature3.module.css'



function componentToHex(c) {
  let hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  console.log("#" + componentToHex(r) + componentToHex(g) + componentToHex(b));
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}


  function AustinList({colorList}) {
    return (
      <ul className={styles.colorList}>
        {colorList.map((color) => <AustinListItem color={color} key={color.name}/>)}
      </ul>
    );
  }
  
  function AustinListItem({color}) {
    return (
      <li className={styles.colorListItem}>
        {/* Have to cast to Number, since stored as a string in the data object right now */}
        <div className={styles.box} style={{backgroundColor: rgbToHex(Number(color.redValue), Number(color.greenValue), Number(color.blueValue))}}></div>
        <p>{color.name}, R:{color.redValue}, G:{color.greenValue}, B:{color.blueValue}</p>
      </li>
    );
  }


  export default AustinList
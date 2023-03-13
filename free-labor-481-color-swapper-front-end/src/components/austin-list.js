import { Color } from './color'
import styles from '../styles/feature3.module.css'

// const items = [
//     {
//       title: 'Item 1',
//       subtitle: 'Subtitle 1'
//     },
//     {
//       title: 'Item 2',
//       subtitle: 'Subtitle 2'
//     }
//   ];
  function AustinList({colorList}) {
    return (
      <ul className={styles.colorList}>
        {colorList.map((color) => <AustinListItem color={color} key={color.name}/>)}
      </ul>
    );
  }
  
  function AustinListItem({color}) {
    return (
      <li>
        <h4>{color.name}</h4>
      </li>
    );
  }

  export default AustinList
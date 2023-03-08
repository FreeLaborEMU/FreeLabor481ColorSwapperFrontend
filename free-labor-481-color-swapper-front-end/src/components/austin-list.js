import { Color } from './color'

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
      <ul>
        {colorList.map((color) => <AustinListItem color={color} />)}
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
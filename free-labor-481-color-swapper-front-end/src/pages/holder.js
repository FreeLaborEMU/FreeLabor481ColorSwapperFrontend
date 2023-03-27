
import styles2 from '@/styles/collaspableMenu.module.css'
import { useState } from 'react';
import ColorList from '../components/color-list'
import { Color } from '../components/color'


function Holder()
{

    var localColor;
    localColor = new Color('red', '255', '0', '0');
    var localColor2;
    localColor2 = new Color('green', '0', '255', '0');
    var localColor3;
    localColor3 = new Color('blue', '0', '0', '255');
  
    //Some colors from the actual palette:
    var custom41;
    custom41 = new Color('custom 41', '114', '133', '151');
    var custom11;
    custom11 = new Color('custom 11', '107', '81', '28');
    var custom1;
    custom1 = new Color('custom 1', '11', '33', '26');
    var custom7;
    custom7 = new Color('custom 7', '64', '220', '236');
  
    var colors = [];
    colors.push(localColor);
    colors.push(localColor2);
    colors.push(localColor3);
  
  
    //Pushing colors from actual palette:
    colors.push(custom41);
    colors.push(custom11);
    colors.push(custom1);
    colors.push(custom7);


    const[collasbled, uncollasbled] = useState(true);
    const makeCollaspe= () => {
        uncollasbled(!collasbled);
        }
        return (
            <div className={collasbled?styles2.closed:styles2.open}>
            <button className={styles2.collaspsible} id="collapsible" onClick={makeCollaspe}> Colors </button>
            <div className={collasbled?styles2.textClosed:styles2.testOpen}>
                <ColorList colorList={colors}></ColorList>
            </div> 
            </div>
        )
}
export default Holder;

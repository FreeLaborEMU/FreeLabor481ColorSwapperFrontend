
import styles2 from '@/styles/collaspableMenu.module.css'
import { useState } from 'react';
function Holder()
{
    const[collasbled, uncollasbled] = useState(true);
    const makeCollaspe= () => {
        uncollasbled(!collasbled);
        }
        return (
            <div className={collasbled?styles2.closed:styles2.open}>
            <button className={styles2.collaspsible} id="collapsible" onClick={makeCollaspe}> Colors </button>
            <p className={collasbled?styles2.textClosed:styles2.textOpen}> Placeholder text </p>
            <p className={collasbled?styles2.textClosed:styles2.textOpen}> Placeholder text </p>
            <p className={collasbled?styles2.textClosed:styles2.textOpen}> Placeholder text </p>
            <p className={collasbled?styles2.textClosed:styles2.textOpen}> Placeholder text </p>
            </div>
        )
}
export default Holder;

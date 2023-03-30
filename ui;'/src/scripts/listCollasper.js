import styles2 from '@/styles/collaspableMenu.module.css'
import { useState } from 'react';
export default function collaspable()
{
    const[collasbled, uncollasbled] = useState(true);
        const makeCollaspe= () => {
    uncollasbled(!collasbled);
    }
    return (
        <div className={collasbled?styles2.closed:styles2.open}>
        <button className={styles2.content} id="collapsible" onClick={makeCollaspe}> Colors </button>
        </div>
    )
    
}
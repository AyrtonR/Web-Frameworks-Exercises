import React from 'react';
import styles from './SearchResult.module.css';

export default function SearchResult(props) {
    return (
        <div className= { styles.product }>
            <div>
                <div className= {styles.pics}> <img src={`/images/${props.image}`} /> </div>
                <div className= { styles.name } > {props.name} </div>
                <div className= {styles.makee}> {props.make} </div>
                <div className= {styles.pricee}> €{props.price} </div>
            </div>
        </div>
    )
}
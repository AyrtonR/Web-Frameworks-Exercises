import React from 'react' 
import styles from './NavBar.module.css';

export default function NavBar () {
  return (
    <div className={ styles.NavBarBackground }>
        <div className={ styles.container }> 
        <nav> 
            <ul> 
                <li class="company"> HELSINGIN SANOMAT </li>
                <li> Etusivu </li>
                <li> Uutiset </li>
                <li> Lehdet </li>
                <li> Asiakaspalvelu </li>
                <li> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </li>
                <li> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </li>
                <li class="empty"> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    </li>
                <li> Tilaa </li> 
                <li> Kirjaudu </li>
                <li> Valikko </li>
            </ul> 
        </nav>

        </div>
    </div>
  )
}


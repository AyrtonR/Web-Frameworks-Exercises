import React from 'react' 
import styles from './Main.module.css';
import pic from './test.jpg';
import pic2 from './test2.JPG'


export default function Main () {
  return (
    <div className={styles.container}>
            <div className={ styles.left}>
                <div className={styles.header}> Koronavirus  </div>
                <div className={styles.img}> <img src={pic} class="idk" width="1000" height="450" /> </div>
                <div className={styles.seuraa}> HS seuraa </div>
                <p> <span className={styles.emergency}> Päivittyväseuranta | </span> STM: Parasetamolia tai deksametasonia sisältävien lääkkeiden myyntiä rajoitetaan </p>
                <div className={styles.img2}> <img src={pic2} class="Image2" width="250" height="150"/> </div>
                <p> <span className={styles.emergency}> Koronavirus | </span> Maskisuositus muutettiin harkinnan­varaiseksi, mutta Helsingin keskustassa liikkuneista moni aikoo jatkaa maskin käyttöä: ”Alaston olo, jos ei käytä”   </p>
            </div>
          <div className={ styles.right}>
            <div className={styles.header2}> Luetuimmat  </div> 
                <div className= {styles.info2}> <span className={styles.number}> 1 </span>  <span className={styles.title2}> Pääkirjoitus | </span> Poliitikot katselevat varpaitaan, kun hyvinvointivaltio luhistuu </div>
                <div className= {styles.info2}> <span className={styles.number}> 2 </span> <span className={styles.title2}> Perhesiteitä | </span> Roope Salminen treenasi viisi kertaa viikossa ja irtautui ahdistavasta parisuhteesta </div>
                <div className= {styles.info2}> <span className={styles.number}> 3 </span> <span className={styles.title2}> Turkki | </span> Mies eksyi metsään Turkissa, liittyi häntä etsineeseen pelatuspartioon sattumalta </div>
                <div className= {styles.info2}> <span className={styles.number}> 4 </span> <span className={styles.title2}> HS Helsinki | </span> Päivämääräksi oli sovittu 9.9.1990 ja paikaksi Munkkiniemen Kalastajatorppa </div>
                <div className= {styles.info2}> <span className={styles.number}> 5 </span> <span className={styles.title2}> Autot | </span> Kolme autovalmistajaa sulkee Saksassa tehtaitaan sirupulan vuoksi </div> 
                <div className= {styles.info2}> <span className={styles.number}> 6 </span> <span className={styles.title2}> HS Helsinki | </span> Vuosaaren vanhemmat ovat täydessä hälytystilassa klovniasuiden häirikön takia </div> 
                <div className= {styles.info2}> <span className={styles.number}> 7 </span> <span className={styles.title2}> Historia | </span> Hilkka ihastui saksalaissotilaaseen kesken jatkosodan ja oli pian raskaana </div> 

            </div>
    </div>
  )
}
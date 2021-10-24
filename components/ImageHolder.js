import React from "react";
import styles from '../styles/ImageHolder.module.css'
import { MoreImgData } from "./MoreImgData";

export default function ImageHolder() {
    return (
        <div className={styles.container}>
            {/* <img className={styles.img} src='https://scontent-muc2-1.xx.fbcdn.net/v/t1.6435-9/244282622_394969315578100_6101341566863679338_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=TKI9e891DsQAX_Vo9hf&_nc_ht=scontent-muc2-1.xx&oh=f1dfafcb8506a322d7fbcbb54b9c2898&oe=619BA856' alt="eloteto"/>*/}
            <table>
                <tr>

                </tr>
            </table>
            {MoreImgData.map((slide, index) => {
                return (
                    <div>
                        <img src={slide.image} alt='roof image' className={styles.img} />
                    </div>
                );
            })}
        </div>

    )
}
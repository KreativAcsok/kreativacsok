import React, { useEffect } from "react";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ImageSlider from "../components/ImageSlider";
import { SliderData } from "../components/SliderData";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1500
    });
    AOS.refresh();
  });

  return (
    <div className={styles.container}>
      <style jsx global>{`
      body {
        margin: 0px;
        overflow-x: hidden;
      }
    `}</style>

      <div className={styles.container2}>
        <section className={styles.one}>
          <h1 className={styles.onetext} data-aos="fade-up" data-aos-easing="ease-in-out-cubic">Szlogen</h1>
        </section>
        <section className={styles.two}>
          <h1 className={styles.twotext} data-aos="fade-down" data-aos-easing="ease-in-out-cubic">Béla</h1>

          <p className={styles.twoparagraph} data-aos="fade-up" data-aos-delay="50">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus accumsan scelerisque. Etiam vel rhoncus augue, ac tempor lorem. Integer sagittis tempor enim, sed consectetur augue pharetra sed. Sed a felis dolor. Curabitur ac dapibus urna. Nulla placerat pulvinar consectetur. Nulla nec mauris quam. Aenean gravida tortor sed turpis mollis viverra non et tortor. Etiam sed nulla vitae risus luctus molestie. Phasellus fermentum nisi a turpis sollicitudin, iaculis aliquet odio venenatis. In dignissim porttitor vestibulum. In hac habitasse platea dictumst. Aenean ligula nisl, dignissim at ornare quis, aliquam sed massa. Donec cursus sagittis sapien eget rutrum. Proin vestibulum est non ipsum dictum tincidunt.
          </p>
        </section>
        <section className={styles.three}>
          <h1 className={styles.threetext} data-aos="fade-down" data-aos-easing="ease-in-out-cubic">Gergő</h1>
          <p className={styles.threeparagraph} data-aos="fade-up" data-aos-delay="50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam congue quam elementum elit scelerisque faucibus. In hac habitasse platea dictumst. Maecenas tellus purus, fermentum accumsan augue sit amet, lobortis malesuada massa. Nunc accumsan convallis nulla, eu lobortis risus euismod vel. Nam iaculis pulvinar lectus non porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum lorem euismod nisl pharetra, ut porta augue consectetur. </p>
        </section>
        <section className={styles.four}>
          <h1 className={styles.fourtext} data-aos="fade-down" data-aos-easing="ease-in-out-cubic">Galéria</h1>
          <div data-aos="fade-up" data-aos-delay="50">
            <ImageSlider slides={SliderData}/> {/* src: https://www.youtube.com/watch?v=l1MYfu5YWHc&t=961s */}
          </div>
          <a href="./moreimg" className={styles.moreimg} data-aos="fade-down">További képek</a>
        </section>
        <div className={styles.tablecontainer}>
          <table className={styles.table}>
            <tr>
              <td>E-Mail: kreativacsok@gmail.com</td>
              <td>Facebook: <a href="https://www.facebook.com/kreativacsok" className={styles.link}>facebook.com/kreativacsok</a></td>
              <td>Telefonszám: 06 30 000 0000</td>
            </tr>
          </table>
        </div>

      </div>

    </div>
  )
}

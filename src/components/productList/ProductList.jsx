import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

import "swiper/css";
import "swiper/css/navigation";
import styles from "./ProductList.module.css";
import { products } from "../../utilities/Products";
import Display from "./Display";
import { useState } from "react";

function ProductList() {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <section className={styles.productlistSection}>
      <div className="container">
        <div className={styles.innerProductListSection}>
          <h1>Find your next obsession</h1>

          <div className={styles.innerProductListContainer}>
            <div
              className={`${styles.displayIcons} ${styles.displayIcon1} ${
                isBeginning ? styles.disabledIcon : ""
              }`}
            >
              <div className={styles.displayIconWrapper}>
                <GrPrevious className={styles.displayIcon} />
              </div>
            </div>

            <div
              className={`${styles.displayIcons} ${styles.displayIcon2} ${
                isEnd ? styles.disabledIcon : ""
              }`}
            >
              <div className={styles.displayIconWrapper}>
                <GrNext className={styles.displayIcon} />
              </div>
            </div>

            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                500: { slidesPerView: 2 },
                994: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
              navigation={{
                nextEl: `.${styles.displayIcon2}`,
                prevEl: `.${styles.displayIcon1}`,
              }}
              onSlideChange={(swiper) => {
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
              onReachBeginning={() => setIsBeginning(true)}
              onReachEnd={() => setIsEnd(true)}
              onFromEdge={(swiper) => {
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
              className={styles.productSlider}
            >
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                  <Display
                    productImg={product.productImg}
                    productname={product.productname}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <hr className={styles.line} />
    </section>
  );
}

export default ProductList;

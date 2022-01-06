import React from "react";
import "./contacts.css";

const Contacts = () => {
  return (
    <div className="contact">
      <div className="contact_main">
        <h1>Контакты</h1>
        <div className="contact_flex">
          <div className="contact_flex_leftBlock">
            <h3>Наш адрес</h3>
            <div className="contact_address">
              <a href="">
                <img
                  width={40}
                  src="https://cdn-icons-png.flaticon.com/128/3203/3203071.png"
                  alt=""
                />
              </a>
            </div>
            <h3>Часы работы</h3>
            <div className="contact_time">
              <a href="">
                <img
                  width={40}
                  src="https://cdn-icons.flaticon.com/png/128/3371/premium/3371432.png?token=exp=1641479639~hmac=3921a365afe8601ea94ef20e09b7d265"
                  alt=""
                />
              </a>
            </div>
            <h3>Телефон</h3>
            <div className="contact_whatsapp">
              <a href="">
                <img
                  width={40}
                  src="https://cdn-icons.flaticon.com/png/128/5585/premium/5585846.png?token=exp=1641479111~hmac=a6a18a9ebf22b08314dfb9ca844f056c"
                  alt=""
                />
              </a>
            </div>
            <h3>Электронная почта</h3>
            <div className="contact_email">
              <a href="">
                <img
                  width={40}
                  src="https://cdn-icons-png.flaticon.com/128/1782/1782765.png"
                  alt=""
                />
              </a>
            </div>
            <h3>Схема проезда</h3>
            <div className="contact_map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2902.395035643922!2d45.69000361479976!3d43.32692208148665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4051d161eaa51e15%3A0x6bcd9e046629a7bd!2z0JjQvdGC0YPQutC-0LQ!5e0!3m2!1sru!2sru!4v1641466709956!5m2!1sru!2sru"
                width="600"
                height="450"
              />
            </div>
            <h3>Наше здание</h3>
            <div className="contact_garage">
              <img
                src="https://avatars.mds.yandex.net/get-altay/4054675/2a00000176634eb9b64a78180efa1a9b9ea7/XXL"
                alt=""
              />
            </div>
            <h3>Связь с нами</h3>
            <div className="contact_aboutUs">
              <p>Наши соц. страницы</p>
              <hr />
              <a href="">
                <img
                  width={40}
                  src="https://cdn-icons.flaticon.com/png/128/4494/premium/4494490.png?token=exp=1641472861~hmac=c3a97f769eb0d0a775e531fbdea154e7"
                  alt=""
                />
              </a>
              <a href="">
                <img
                  width={40}
                  src="https://cdn-icons-png.flaticon.com/128/1384/1384015.png"
                  alt=""
                />
              </a>
              <a href="">
                <img
                  width={40}
                  src="https://cdn-icons.flaticon.com/png/128/4494/premium/4494464.png?token=exp=1641472861~hmac=2839e303065e7d248990f8e36cfe46f7"
                  alt=""
                />
              </a>
              <a href="">
                <img
                  width={40}
                  src="https://cdn-icons-png.flaticon.com/128/2111/2111710.png"
                  alt=""
                />
              </a>
              <a href=""><img width={40} src="https://cdn-icons.flaticon.com/png/128/3670/premium/3670302.png?token=exp=1641480135~hmac=f9cb4efcc5f1e496054576ff1a2d89f2" alt="" /></a>
            </div>
          </div>
          <div className="contact_flex_rightBlock">
            <h3>Наши работы</h3>
            <div className="contact_infoBlock">
              <img
                src="https://top-tuning.ru/w500/upload/images/news/106310/volvo_xc90_2_gen_fin_1_03.jpg"
                alt=""
              />
              <p className="contact_desc">
                Финальный обзор работ – идеальный Volvo XC90
              </p>
            </div>
            <div className="contact_infoBlock">
              <img
                src="https://top-tuning.ru/w500/upload/images/news/106303/kopmleks_shumoizolyaciya_salona_volvo_xc90_01.jpg"
                alt=""
              />
              <p className="contact_desc">
                Тотальная шумоизоляция для Volvo XC90 2 поколения
              </p>
            </div>
            <div className="contact_infoBlock">
              <img
                src="https://top-tuning.ru/w500/upload/images/news/106302/okleyka_plenkoy_volvo_xc90_stek_dyno_shield_top_tuning_moskva_01.jpg"
                alt=""
              />
              <p className="contact_desc">
                Оклейка кузова Volvo XC90 полиуретановой, антигравийной пленкой
              </p>
            </div>
            <div className="contact_infoBlock">
              <img
                src="https://top-tuning.ru/w500/upload/images/news/106301/deteyling_polirovka_kuzova_volvo_xc90_2_pokoleniya_02.jpg"
                alt=""
              />
              <p className="contact_desc">
                Детейлинг и полировка кузова Volvo XC90 2 поколения
              </p>
            </div>
            <div className="contact_infoBlock">
              <img
                src="https://top-tuning.ru/w500/upload/images/news/106300/udalenie_vmyatin_bez_pokraski_volvo_xc90_top_tuning_moskva_01.jpg"
                alt=""
              />
              <p className="contact_desc">
                Удаление вмятин на Volvo XC90 по технологии PDR
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;

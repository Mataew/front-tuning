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
              <div className="img">
              <img
                width={40}
                src="https://cdn-icons-png.flaticon.com/128/5192/5192571.png"
                alt=""
              />
              </div>
              <span>г.Грозный, ул.Трошева 7 (гараж "Медина")</span>
            </div>
            <h3>Часы работы</h3>
            <div className="contact_time">
              <div className="img">
              <img
                width={40}
                src="https://cdn-icons-png.flaticon.com/128/47/47654.png"
                alt=""
              />
              </div>
              <span>Мы работаем с 8:00 до 20:00 без выходных</span>
            </div>
            <h3>Телефон</h3>
            <div className="contact_whatsapp">
            <div className="img">
              <img
                width={40}
                src="https://cdn-icons-png.flaticon.com/128/13/13936.png"
                alt=""
              />
              </div>
              <span>+7 (928) - 345 - 67 - 89</span>
              <span>+7 (922) - 098 - 76 - 54</span>
            </div>
            <h3>Электронная почта</h3>
            <div className="contact_email">
              <div className="img">
              <img
                width={40}
                src="https://cdn-icons-png.flaticon.com/128/561/561188.png"
                alt=""
              />
              </div>
              <span>virtuning12332@gmail.com</span>
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
            <div className="contact_aboutUs">
              <hr />
              <a href="">
                <img
                  width={40}
                  src="https://cdn-icons-png.flaticon.com/128/49/49444.png"
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
                  src="https://cdn-icons-png.flaticon.com/128/1384/1384005.png"
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
              <a href="">
                <img
                  width={40}
                  src="https://cdn-icons-png.flaticon.com/128/49/49351.png"
                  alt=""
                />
              </a>
            </div>
      </div>
    </div>
  );
};

export default Contacts;

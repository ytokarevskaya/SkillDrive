import React from 'react';
import car2 from '../../img/home-page/car2.svg';
import car3 from '../../img/home-page/car3.svg';
import car4 from '../../img/home-page/car4.svg';

const Description = () => (
    <section class="main-description">
        <div class="main-description__container">
            <div class="main-description__container-block">
                <img src={ car2 } alt="" />
                <div class="main-description__container-block-text">
                    <h2>Аренда напрямую от владельцев</h2>
                    <span>Вы получите автомобиль от его собственника, а мы проверим юридическую чистоту и техническую исправность.</span>
                </div>
            </div>
            <div class="main-description__container-block">
                <div class="main-description__container-block-text">
                    <h2>Автомобили на любой вкус</h2>
                    <span>Вы всегда можете подобрать автомобиль любого класса от бюджетных моделей до премиум-класса и спорткаров.</span>
                </div>
                <img src={ car3 } alt="" />
            </div>
            <div class="main-description__container-block">
                <img src={ car4 } alt="" />
                <div class="main-description__container-block-text">
                    <h2>Гарантия честной аренды</h2>
                    <span>Общение и оплата происходит через наш сервис, что предотвращает вас от обмана.</span>
                </div>
            </div>
        </div>
    </section>
)

export default Description;


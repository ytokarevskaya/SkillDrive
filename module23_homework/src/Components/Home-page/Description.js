import React from 'react';
import car2 from '../../img/home-page/car2.svg';
import car3 from '../../img/home-page/car3.svg';
import car4 from '../../img/home-page/car4.svg';

const Description = () => {
    let DescriptionBlock = ({h, img, alt, span}) => (
        <div class="main-description__container-block">
        <img src={ img } alt={ alt } />
        <div class="main-description__container-block-text">
            <h2>{ h }</h2>
            <span>{ span }</span>
        </div>
    </div>
    )

    return (
    <section class="main-description">
        <div class="main-description__container">
            <DescriptionBlock h="Аренда напрямую от владельцев" img={ car2 } alt = "car1" 
            span="Вы получите автомобиль от его собственника, а мы проверим юридическую чистоту и техническую исправность." />
            <DescriptionBlock h="Автомобили на любой вкус" img={ car3 } alt = "car2" 
            span="Вы всегда можете подобрать автомобиль любого класса от бюджетных моделей до премиум-класса и спорткаров." />
            <DescriptionBlock h="Аренда напрямую от владельцев" img={ car4 } alt = "car3" 
            span="Общение и оплата происходит через наш сервис, что предотвращает вас от обмана." />
        </div>
    </section>
    )
}

export default Description;


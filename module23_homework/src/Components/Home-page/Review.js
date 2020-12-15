import React, { Fragment } from 'react';
import review1 from '../../img/Home-page/review1.svg';

const reviewer = [
    {
        id: 1,
        name: "Иван Иванов",
        city: "Москва",
        monolog: "Классный сервис! В путешествиях по стране часто берём машину в аренду. Здесь нету ограничений по зоне перемещения и поэтому есть возможность съездить в интересные туристические места, которые отдалены от города"
    },
    {
        id: 2,
        name: "Мария Стрельникова",
        city: "Псков",
        monolog: "Потрясающий сервис! В путешествиях по стране часто берём машину в аренду. Здесь нету ограничений по зоне перемещения и поэтому есть возможность съездить в интересные туристические места, которые отдалены от города"
    },
    {
        id: 3,
        name: "Андрей Морозов",
        city: "Ирикла",
        monolog: "Великолепный сервис! В путешествиях по стране часто берём машину в аренду. Здесь нету ограничений по зоне перемещения и поэтому есть возможность съездить в интересные туристические места, которые отдалены от города"
    },
    {
        id: 4,
        name: "Михаил Михайлов",
        city: "Санкт-Петербург",
        monolog: "Странный сервис! В путешествиях по стране часто берём машину в аренду. Здесь нету ограничений по зоне перемещения и поэтому есть возможность съездить в интересные туристические места, которые отдалены от города"
    }
]

const monolog = "Классный сервис! В путешествиях по стране часто берём машину в аренду. Здесь нету ограничений по зоне перемещения и поэтому есть возможность съездить в интересные туристические места, которые отдалены от города."

const Review = () => {
    let [isActive, setIsActive] = React.useState(0);
    const SlideShowBlock = ({img, name, city, monolog}) => (
        <Fragment>
            <img src={img} alt="Client's portrait" />
            <div class="wrapper__text">
                <span class="wrapper__text-name">{name}</span>
                <span class="wrapper__text-city">{city}</span>
                <span class="wrapper__text-monolog">{monolog}</span>
            </div>
        </Fragment>
    )

    return (
    <section class="review">
        <div class="review__container">
            <h2>Отзывы клиентов</h2>
            <div class="slide__show">
                <div class="icon-arrow" />
                <div class="slide__show-rect">
                    <div class="wrapper">
                        <img src={review1} alt="Client's portrait" />
                        <div class="wrapper__text">
                            <span class="wrapper__text-name">Иван Иванов</span>
                            <span class="wrapper__text-city">Москва</span>
                            <span class="wrapper__text-monolog">{monolog}</span>
                        </div>
                    </div>
                </div>
                <div class="icon-arrow" />
            </div>
            <div className="review__container__circles">
                    {[0,1,2,3].map(el => { return <div className="review__container__circles-item" onClick={()=> {
                        setIsActive(isActive = el); console.log(isActive)}}/> })}
                </div>
        </div>
    </section>
    )
};

export default Review;
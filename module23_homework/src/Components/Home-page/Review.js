import React from 'react';

const Review = () => (
    <section class="review">
        <div class="review__container">
            <h2>Отзывы клиентов</h2>
            <div class="review-container-slide__show">
                <div class="review__container-slide__show">
                    <div class="icon-arrow"></div>
                    <div class="review__container-slide__show-rect">
                        <div class="wrapper">
                            <img src="asset/Main-page/review1.svg" alt="Client's portrait" />
                            <div class="review__container-slide__show-rect-text">
                                <span class="review__container-slide__show-rect-text-name">Иван Иванов</span>
                                <span class="review__container-slide__show-rect-text-city">Москва</span>
                            </div>
                        </div>
                        <span class="review__container-slide__show-rect-text-monolog">Классный сервис! В путешествиях по стране часто берём машину в аренду. Здесь нету ограничений по зоне перемещения и поэтому есть возможность съездить в интересные туристические места, которые отдалены от города.</span>
                    </div>
                    <div class="icon-arrow"></div>
                </div>
                <div class="review__container-circles">
                    <div class="review__container-circles-circle"></div>
                    <div class="review__container-circles-circle"></div>
                    <div class="review__container-circles-circle"></div>
                    <div class="review__container-circles-circle"></div>
                </div>
            </div>
        </div>
    </section>
);

export default Review;
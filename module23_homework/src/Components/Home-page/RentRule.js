import React from 'react';

const RentRule = () => (
    <section class="rent-rule">
        <div class="rent-rule__container">
            <h2>Как арендовать автомобиль</h2>
            <div class="rent-rule__container-circles">
                <div class="rent-rule__container-circles__block">
                    <div class="rent-rule__container-circles__block-circle">1</div>
                    <span>Выберите автомобиль<br /></span>
                </div>
                <div class="rent-rule__container-circles-line"></div>
                <div class="rent-rule__container-circles__block">
                    <div class="rent-rule__container-circles__block-circle">2</div>
                    <span>Забронируйте дату и время</span>
                </div>
                <div class="rent-rule__container-circles-line"></div>
                <div class="rent-rule__container-circles__block">
                    <div class="rent-rule__container-circles__block-circle">3</div>
                    <span>Получите автомобиль</span>
                </div>
            </div>
        </div>
    </section>
)

export default RentRule;
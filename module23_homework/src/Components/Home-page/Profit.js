import React from 'react';

const Profit = () => (
    <section class="profit">
        <div class="profit__container">
            <h2>У вас есть автомобиль?</h2>
            <span>Чтобы он не простаивал — сдавайте его в аренду и зарабатывайте.</span>
            <div class="circles__container">
                <div class="circles__container-wrapper">
                    <div class="circles__container-wrapper-circle">1</div>
                    <span class="ignore_menu">Вы сами указываете цену</span>
                </div>
                <div class="circles__container-line"></div>
                <div class="circles__container-wrapper">
                    <div class="circles__container-wrapper-circle">2</div>
                    <span class="ignore_menu">Мы страхуем автомобили</span>
                </div>
                <div class="circles__container-line"></div>
                <div class="circles__container-wrapper">
                    <div class="circles__container-wrapper-circle">3</div>
                    <span class="ignore_menu">Наша комиссия всего 3%</span>
                </div>
                <div class="circles__container-line"></div>
                <div class="circles__container-wrapper">
                    <div class="circles__container-wrapper-circle">4</div>
                    <span class="ignore_menu">Выплаты каждую неделю</span>
                </div>
            </div>
        </div>
    </section>
)

export default Profit;
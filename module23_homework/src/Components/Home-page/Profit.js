import React from 'react';

const Profit = () => (
    <section class="profit">
        <div class="profit__container">
            <h2>У вас есть автомобиль?</h2>
            <span>Чтобы он не простаивал — сдавайте его в аренду и зарабатывайте.</span>
            <div class="circles__container">
                <div class="circles__container-wrapper">
                    <div class="circles__container-wrapper-circle">
                        <div className="icon-Profit1"></div>
                    </div>
                    <span class="circles__container-wrapper-arg">Вы сами указываете цену</span>
                </div>
                <div class="circles__container-line"></div>
                <div class="circles__container-wrapper">
                    <div class="circles__container-wrapper-circle">
                        <div className="icon-Profit2"></div>
                    </div>
                    <span class="circles__container-wrapper-arg">Мы страхуем автомобили</span>
                </div>
                <div class="circles__container-line"></div>
                <div class="circles__container-wrapper">
                    <div class="circles__container-wrapper-circle">
                        <div className="icon-Profit3"></div>
                    </div>
                    <span class="circles__container-wrapper-arg">Наша комиссия всего 3%</span>
                </div>
                <div class="circles__container-line"></div>
                <div class="circles__container-wrapper">
                    <div class="circles__container-wrapper-circle">
                        <div className="icon-Profit4"></div>
                    </div>
                    <span class="circles__container-wrapper-arg">Выплаты каждую неделю</span>
                </div>
            </div>
        </div>
    </section>
)

export default Profit;
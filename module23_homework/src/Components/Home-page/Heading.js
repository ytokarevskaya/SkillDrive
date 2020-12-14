import React from 'react';
import car1 from '../../img/home-page/car1.svg';

const Heading = () => (
    <section class="heading">
            <div class="heading__container">
                <div class="heading__container__registration">
                    <h1>Каршеринг в любой точке России</h1>
                    <span>Будьте всегда за рулём во время путешествий и командировок.</span>
                    <a href="Main.html" target="_blank" rel="nofollow">
                        <button>Зарегистрироваться</button>
                    </a>
                </div>
                <img src={ car1 } alt="Woman near a car" />
            </div>
    </section>
)

export default Heading;
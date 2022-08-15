import React from 'react';
import Card from './card';

import data from '../data';

function CardList() {
    const cards = data.map(item => <Card key={item.id} {...item} />);

    console.log(cards);
    return (
        <section className="card-list">
            {cards}
        </section>
    );
}

export default CardList;

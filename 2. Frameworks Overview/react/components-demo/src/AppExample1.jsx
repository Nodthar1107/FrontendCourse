import { CardAsClass } from './components/Card/CardAsClass';
import { CardAsFunction } from './components/Card/CardAsFunction';
import { Cards } from './components/Cards';

const cardDescription = [
    {
        title: 'Заголовок 1',
        description: 'Описание'
    },
    {
        title: 'Заголовок 2',
        description: 'Длинное описание'
    },
    {
        title: 'Заголовок 3',
        description: 'Очень длинное описание'
    },
    {
        title: 'Заголовок 4',
        description: 'Очень оооочень длинное описание'
    }
]

export const App = () => {
    return (
        <Cards>
            {cardDescription.map((card, index) => {
                return <CardAsFunction title={card.title} description={card.description} key={index} />;
            })}
            {cardDescription.map((card, index) => {
                return <CardAsClass title={card.title} description={card.description} key={index} />;
            })}
        </Cards>
    );
}
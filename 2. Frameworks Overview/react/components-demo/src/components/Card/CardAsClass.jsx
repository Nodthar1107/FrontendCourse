import { Component } from 'react';
import './style.css';


/**
 * Описание компонента карточки с помощью класса. Card наследуется от базового класса Component
 * библиотеки React и определеяет метод жизенного цикла render, который возвращает JSX раметку.
 * 
 * Также определен метод, который отрисовывает картинку карточки
 * 
 * Карточка принимает пропсы (набор данных, которые влияют на отображение комоненты):
 * @param title - заголовок карточки
 * @param description - заголовок карточки
 * @param img - путь к картинке
 * @param alt - альтернативный текст для картинки 
 */
export class CardAsClass extends Component {
    render() {
        const { title, description, ...props } = this.props;

        return (
            <div className='card'>
                <div className='card__header'>
                    {title}
                </div>
                {this.renderImg()}
                <div className='card__description'>
                {description}
            </div>
        </div>
        );
    }

    renderImg() {
        const { img = undefined, alt = undefined } = this.props;

        return img
            ? <img className='card__image' src={img} alt={alt} /> 
            : <div className='card__default-image' />;
    }
}
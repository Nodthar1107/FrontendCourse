import './style.css';

/**
 * Описание компонента карточки с помощью функции.
 * 
 * Карточка принимает пропсы (набор данных, которые влияют на отображение комоненты):
 * @param title - заголовок карточки
 * @param description - заголовок карточки
 * @param img - путь к картинке
 * @param alt - альтернативный текст для картинки 
 */
export const CardAsFunction = ({ title, description, img = undefined, alt = undefined, ...props }) => {
    return (
        <div className='card'>
            <div className='card__header'>
                {title}
            </div>
            {img
                ? <img className='card__image' src={img} alt={alt} />
                : <div className='card__default-image' />
            }
            <div className='card__description'>
                {description}
            </div>
        </div>
    );
}

import './style.css';

/**
 * Компонента кнопки, которая в качестве пропсов принимает текст кнопки - title и
 * обработчик нажатия - onClick
 */
export const ButtonFuncComponent = ({ title, onClick, ...props }) => {
    return (
        <button onClick={onClick} className={props.className}>
            {title}
        </button>
    );
}
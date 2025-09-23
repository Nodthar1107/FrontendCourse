import './style.css';

export const Cards = ({ children, ...props }) => {
    return (
        <div className='cards'>
            {children}
        </div>
    );
}
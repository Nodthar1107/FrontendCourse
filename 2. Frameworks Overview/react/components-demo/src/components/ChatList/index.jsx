import './style.css';

export const ChatList = ({ children, ...props }) => {
    return (
        <div className='chat-list' {...props}>
            {children}
        </div>
    );
}
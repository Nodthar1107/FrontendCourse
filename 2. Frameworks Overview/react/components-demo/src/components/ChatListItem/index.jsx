import clsx from 'clsx';

import './style.css';

export const ChatListItem = ({ contactName, lastMessage, avatarSrc = undefined, ...props }) => {
    return (
        <div className={clsx('chat-list__item', props.className)}>
            {avatarSrc
                ? (<img src={avatarSrc} />)
                : (<div className='chat-list__item-avatar chat-list__item-avatar_empty' />)
            }
            <div className='chat-list__item-content'>
                <div className='chat-list__item-contact-name'>{contactName}</div>
                <div className='chat-list__item-last-message'>{lastMessage}</div>
            </div>
        </div>
    );
}
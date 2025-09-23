import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ChatList } from '../ChatList';
import { ChatListItem } from '../ChatListItem';

import './style.css';

const chats = [
    {
        contactName: 'Кирилл',
        lastMessage: 'Привет! Как дела?'
    },
    {
        contactName: 'Даня',
        lastMessage: 'Привет! Как дела?'
    },
    {
        contactName: 'Серега',
        lastMessage: 'Привет! Как дела?'
    },
    {
        contactName: 'Георгий Петрович Тарасов',
        lastMessage: 'Привет! Как дела?'
    },
    {
        contactName: 'Арина',
        lastMessage: 'Привет! Как дела?'
    }
];

export const ChatWidget = ({ ...props }) => {
    const [filterText, setFilterText] = useState('');
    const [keyboardSelectionIndex, setKeyboardSelectionIndex] = useState(-1);
    const [chats, setChats] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingError, setIsLoadingError] = useState(false);

    const allChatsRef = useRef([]);

    const handleInputChange = useCallback((event) => {
        const newFilterText = event.target.value;
        setFilterText(newFilterText);

        if (keyboardSelectionIndex !== -1) {
            setKeyboardSelectionIndex(0);
        }

        if (newFilterText === '') {
            setChats(allChatsRef.current);
        } else {
            const newChats = allChatsRef.current.filter((chat) => {
                return chat.contactName.toUpperCase().includes(newFilterText.toUpperCase());
            });

            setChats(newChats);
        }
    }, [keyboardSelectionIndex]);

    const handleKeyDown = useCallback((event) => {
        if (event.key === 'ArrowDown') {
            if (keyboardSelectionIndex === -1) {
                setKeyboardSelectionIndex(0);
            } else {
                changeSelectionIndex('down');
            }
        }

        if (event.key === 'ArrowUp' && keyboardSelectionIndex !== -1) {
            changeSelectionIndex('up');
        }
    }, [chats, keyboardSelectionIndex]);

    const changeSelectionIndex = (direction) => {
        const newKeyboardSelectionIndex = direction === 'down'
            ? (keyboardSelectionIndex + 1) % chats.length
            : (chats.length + keyboardSelectionIndex - 1) % chats.length;
            
        setKeyboardSelectionIndex(newKeyboardSelectionIndex);
    };

    useEffect(() => {
        loadChats()
            .then((loadedChats) => {
                setChats(loadedChats);
                allChatsRef.current = loadedChats;
            })
            .catch(() => {
                setIsLoadingError(true);
            })
            .finally(() => {
                setIsLoading(false);
            });

    }, []);

    const renderContent = () => {
        if (isLoading) {
            return <div className='chat-widget__loading'>Загрузка списка чатов...</div>;
        }

        if (isLoadingError) {
            return <div className='chat-widget__error-message'>Произошла ошибка загрузки</div>;
        }

        return (
            <ChatList {...props}>
                {chats.map((chat, index) => {
                    return (
                        <ChatListItem
                            contactName={chat.contactName}
                            lastMessage={chat.lastMessage}
                            className={index === keyboardSelectionIndex && 'chat__chat-item_selected'}
                            key={chat.contactName}
                        />
                    );
                })}
            </ChatList>
        );
    };

    return (
        <div className='chat-widget'>
            <input
                className='chat-widget__filter'
                value={filterText}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                onBlur={() => setKeyboardSelectionIndex(-1)}
            />
            {renderContent()}
        </div>
    );
}

function loadChats() {
    return new Promise((resolve) => setTimeout(() => resolve(chats), 2000));
}

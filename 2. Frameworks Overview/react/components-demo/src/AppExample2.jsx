import { ChatWidget } from "./components/ChatWidget";

export const App = () => {
    const sidebarStyle = {
        width: '400px',
        minHeight: '100%',
        borderRight: '1px solid black',
        boxSizing: 'border-box',
    };
    
    return (
        <div className='sidebar-panel' style={sidebarStyle}>
            <ChatWidget />
        </div>
    );
}
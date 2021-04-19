import { ChatEngine } from 'react-chat-engine';

import LoginForm from './components/LoginForm';

import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
    
    if(!localStorage.getItem('username')) return <LoginForm />;
    

    return (
        <ChatEngine 
            height="100vh" 
            projectID="38310890-ed26-4a68-851b-f430f908bdf3" 
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps } /> }
        />
    );
}

export default App;
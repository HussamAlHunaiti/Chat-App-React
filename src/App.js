import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginPage';

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />;
    return (
    <ChatEngine
        height="100vh"
        projectID="abd1be2e-67be-4e29-b9da-37ca2d7d4051"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
    );
}

export default App;

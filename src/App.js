import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import TodoPage from './pages/TodoPage';
import ApolloWrapper from './apollo/provider';

function App() {
  return (
    <ApolloWrapper>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/todos" element={<TodoPage />} />
        </Routes>
      </Router>
    </ApolloWrapper>
  );
}

export default App;

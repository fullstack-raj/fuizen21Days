import './App.css';
import Settings from './pages/Settings';
import LandingPage from './pages/LandingPage';
import ThemeProvider from './Context/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <LandingPage />
      <Settings />
    </ThemeProvider>
  );
}

export default App;

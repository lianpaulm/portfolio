import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from './components/styles/Global';
import { ThemeProvider } from 'styled-components';
import { base, main } from './components/styles/Theme';

import Header from './components/Header';
import Hero from './components/Hero';
import Works from './components/Works';

const theme = { ...base, colors: main };

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <Header />
          <div id="content">
            <main>
              <Hero />
              <Works />
            </main>
          </div>
        </>
      </ThemeProvider>
    </Router>
  );
}

export default App;

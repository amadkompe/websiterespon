
import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';


//Pages
import Home from './pages/Home';
import SignUp from './pages/SignupPage';
import Join from './pages/JoinPage';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/join" exact component={Join} />
      </Switch>
      <Footer />
    </Router>

  );
}

export default App;

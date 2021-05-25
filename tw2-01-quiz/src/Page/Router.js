import {useEffect} from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {actionAll} from '../Redux/Action';
import Home from './Home';
import Quiz from './Quiz';
import Contact from './Contact';

function Router() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(actionAll());
  })

  return (
    <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/quiz">Quiz</Link></li>
            <li><Link to="/form/contact">Contact</Link></li>
          </ul>
        </nav>


        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/form/contact" component={Contact} />
        </Switch>
    </BrowserRouter>
  )
}

export default Router

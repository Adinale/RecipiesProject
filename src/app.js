import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';
import { Provider } from 'react-redux';
// import 'typeface-roboto';
import Header from './components/Header';
import Footer from './components/Footer'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from './components/Main';
import RecipiesList from './components/recipiesList';
import AddRecipies from './components/addRecipies';
import About from './components/About';

class App extends React.Component {

    componentDidMount() {

    }

    render() {
        return (
            <div dir="rtl" style={{ textAlign: 'right' }}>


                <Router>
                    <Header />
                    <Switch>

                        <Route path="/Main" component={Main}>
                        </Route>
                        <Route path='/recipiesList' component={RecipiesList}>
                        </Route>
                        <Route path='/addRecipies' component={AddRecipies}>
                        </Route>
                        <Route path='/About' component={About}>
                        </Route>
                    </Switch>
                </Router>
                <Footer />
            </div>
        )
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
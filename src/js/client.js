import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, Route, IndexRoute} from "react-router";

import ProductPage from "./components/ProdDesc/ProductPage";
import List from './components/ProdList/List';
import Layout from "./components/Layout";
import store from "./store"

const app = document.getElementById('app');

ReactDOM.render(<Provider store={store}>
    <Router>
        <Route path="/" component={Layout}>
            <IndexRoute component={List}></IndexRoute>
            <Route path="product/:prodId" component={ProductPage}></Route>
        </Route>
    </Router>
</Provider>, app);
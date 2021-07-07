import React from 'react';
import { BrowserRouter as Routing, Switch, Route } from 'react-router-dom';

// PAGES
    import Home from '../pages/home';
    import MenuPage from '../pages/menu';
    import Order from '../pages/order';
    import Contact from '../pages/contact';
    import Acai from '../pages/category/acai';
    import Drink from '../pages/category/drinks';
    import Pizza from '../pages/category/pizza';

const Router = () => {
    return(
        <Routing>
            <Switch>
                <Route path={'/'} exact={true} component={Home} />
                <Route path={'/menu'} exact={true} component={MenuPage} />
                <Route path={'/categoria'} exact={true} component={Order} />
                <Route path={'/categoria/acai'} exact={true} component={Acai} />
                <Route path={'/categoria/bebidas'} exact={true} component={Drink} />
                <Route path={'/categoria/pizza'} exact={true} component={Pizza} />
                <Route path={'/contato'} exact={true} component={Contact} />
            </Switch>
        </Routing>
    )
}

export default Router;
/*
 * @Author: Detcx
 * @Date: 2018-11-02 17:08:38
 * @Last Modified by: Detcx
 * @Last Modified time: 2018-12-01 12:38:35
 * @Description: jsx 形式, 对应配置 ./components/RouteConf.jsx
 */
import React from 'react';
import ReactDom from 'react-dom';
import {
  Route,
  Router,
  IndexRoute,
  browserHistory
} from 'react-router';
import App from './components/App';
import * as routeConf from './RouteConf';

const rootRoute = (
  <Route path="/" component={App}>
    <IndexRoute getComponent={routeConf.Login} />
    <Route path="home" getComponent={routeConf.Home} />
    <Route path="product" getComponent={routeConf.Product} />
    <Route path="product/:id" getComponent={routeConf.ProductDetail} />
    <Route path="news" getComponent={routeConf.News}>
      <IndexRoute getComponent={routeConf.NewsA} />
      <Route path="newsa" getComponent={routeConf.NewsA} />
      <Route path="newsb" getComponent={routeConf.NewsB} />
    </Route>
    <Route path="about" getComponent={routeConf.About} onEnter={routeConf.handleEnter} onLeave={routeConf.handleLeave} />
    <Route path="*" getComponent={routeConf.NoMatch} />
  </Route>
);

ReactDom.render(
  <Router routes={rootRoute} history={browserHistory} />,
  document.getElementById('root'),
);

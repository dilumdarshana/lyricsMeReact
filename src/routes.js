import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history'
import AlbumList from './containers/admin/albums/album_list';
import PageNotFound from './components/404';

const history = createBrowserHistory();

const routes = (
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/albums" component={AlbumList} />
                <Route component={PageNotFound}/>
            </Switch>
        </ConnectedRouter>
  );
  
  export default routes;

import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { routes } from '../routes';

export default class Router extends React.Component {
  public static renderRoutes() {
    let redirectRoot: any = null;

    return {
      renderRoutes: routes().map(item => {
        if (item.disabled) {
          return null;
        }

        if (item.redirect === true) {
          redirectRoot = <Redirect from='/' to={item.to} />;
        }

        return (
          <Route exact={item.hasParameters || item.exact} key={item.to} path={item.to} component={item.component} />
        );
      }),
      redirectRoot
    };
  }

  public render(): JSX.Element {
    const { renderRoutes, redirectRoot } = Router.renderRoutes();

    return (
      <div className='integr8ly-container'>
        <Switch>
          {renderRoutes}
          {redirectRoot}
        </Switch>
      </div>
    );
  }
}

export { Router };

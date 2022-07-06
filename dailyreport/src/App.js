import { MainLayout, LayoutRoute, EmptyLayout } from 'components/Layout';
import PageSpinner from 'components/PageSpinner';
import React from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import LoginPage from './pages/LoginPage';
import './styles/reduction.scss';

const Chromebooks = React.lazy(() => import('pages/ChromebooksPage'));
const ChartPage = React.lazy(() => import('pages/InventarioPage'));
const Plantas = React.lazy(() => import('pages/PlantasPage'));
const Error404 = React.lazy(() => import('./pages/PageNotFound'));

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};

const App = (props) => {
  const token = localStorage.getItem('token');
    return (
      <BrowserRouter basename={getBasename()}>
          <Switch>
            <LayoutRoute exact path="/login" layout={EmptyLayout} component={props => (<LoginPage/>)}/>
            <MainLayout breakpoint={props.breakpoint}>
              <React.Suspense fallback={<PageSpinner />}>
              <Toaster />
              {
                token ?
                  <>
                    <Route exact path="/plantas" component={Plantas} />
                    <Route exact path="/chromebooks" component={Chromebooks} />
                    <Route exact path="/inventario" component={ChartPage} />
                  </> :
                  <Redirect to="/login" />
              }
              </React.Suspense>
            </MainLayout>
            <Redirect to="/login" />
          </Switch>
      </BrowserRouter>
    );
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

export default componentQueries(query)(App);

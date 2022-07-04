import { MainLayout } from './components/Layout';
import PageSpinner from 'components/PageSpinner';
import React from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './styles/reduction.scss';
import 'react-toastify/dist/ReactToastify.css';
import { Toaster } from 'react-hot-toast';

const Chromebooks = React.lazy(() => import('./pages/Chromebooks/ChromebooksPage'));
const InventarioPage = React.lazy(() => import('./pages/Inventario/InventarioPage'));
const Plantas = React.lazy(() => import('./pages/Plantas-Aulas/PlantasPage'));
const Herramientas = React.lazy(() => import('./pages/Herramientas/HerramientasPage'))
const Pruebas = React.lazy(() => import('./pages/Pruebas/PruebasPage'))

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};

const App = (props) => {
  return (
    <BrowserRouter basename={getBasename()}>
      <Switch>
        <MainLayout breakpoint={props.breakpoint}>
          <React.Suspense fallback={<PageSpinner />}>
            <Toaster/>
            <Route exact path="/" component={Plantas} />
            <Route exact path="/chromebooks" component={Chromebooks} />
            <Route exact path="/inventario" component={InventarioPage} />
            <Route exact path="/herramientas" component={Herramientas} />
            <Route exact path="/pagina-pruebas" component={Pruebas} />
          </React.Suspense>
        </MainLayout>
        <Redirect to="/" />
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

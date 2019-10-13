import React, { useEffect, Fragment } from 'react';
import SearchBar from './components/layout/search-bar';
import Logs from './components/logs/logs';
import AddBtn from './components/layout/add-btn';
import AddLogModal from './components/logs/add-log-modal';
import EditLogModal from './components/logs/edit-log-modal';
import AddTechModal from './components/techs/add-tech-modal';
import TechListModal from './components/techs/tech-list-modal';
import { Provider } from 'react-redux';
import store from './store';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className="container">
          <AddBtn />
          <AddLogModal />
          <AddTechModal />
          <EditLogModal />
          <TechListModal />
          <Logs />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;

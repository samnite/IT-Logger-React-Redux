import React, { useEffect, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchBar from './components/layout/search-bar';
import Logs from './components/logs/logs';
import AddBtn from './components/layout/add-btn';
import AddLogModal from './components/logs/add-log-modal';
import EditLogModal from './components/logs/edit-log-modal';
import AddTechModal from './components/techs/add-tech-modal';
import TechListModal from './components/techs/tech-list-modal';

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
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
  );
};

export default App;

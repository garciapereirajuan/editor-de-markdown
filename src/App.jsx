import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import store from './redux/reducer';
import NavBottom from './components/NavBottom';
import RenderScreens from './components/RenderScreens';
import './App.css';

const App = () => {
  useEffect(()=>{
    window.scroll(0,0);
  });
  return(
    <Provider store={store}>
      <Grid container id="AppEditorMarkdown" className="stylesEditorMarkdown" direction="row"> 
        <RenderScreens />
        <NavBottom />    
      </Grid>
    </Provider>
  );
};

export default App;

import { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { handlerClasses } from '../../utils/utils';
import ButtonsForNavTop from '../ButtonsForNavTop';
import Grid from '@material-ui/core/Grid';
import mapStateToProps from '../../redux/mapStateToProps';
import mapDispatchToProps from '../../redux/mapDispatchToProps';

const NavTop = ({ setCurrentScreen, currentScreen }) => {
    
    const onHandlerClick = useCallback((element) => {
        handlerClasses(currentScreen);
        setCurrentScreen(element);    
    },[currentScreen, setCurrentScreen])
    
    useEffect(()=>{
        onHandlerClick(currentScreen);
    },[currentScreen, onHandlerClick])
    
    return (
      <Grid 
        container className="topBar" 
        justifyContent="center"
       >
        <ButtonsForNavTop onHandlerClick={onHandlerClick}/>
      </Grid>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(NavTop);
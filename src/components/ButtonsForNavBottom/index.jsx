import React from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapStateToProps';
import mapDispatchToProps from '../../redux/mapDispatchToProps';
import Button from '@material-ui/core/Button';
import './ButtonsForNavBottom.css';

const ButtonsForNavBottom = ({ sizeComplete, setDisplayReverse, displayReverse, setSizeComplete}) => {
    return(
        <React.Fragment>
            {
                !sizeComplete && 
                <Button 
                    className="btn-nav-bottom" variant="contained" 
                    onClick={()=>setDisplayReverse(!displayReverse)}
                    >
                    Posición de ventanas 
                </Button>
            }
            <Button className="btn-nav-bottom" variant="contained"
                onClick={()=>setSizeComplete(!sizeComplete)}
                >
                { (sizeComplete && "Volver") || "Pantalla completa" }
            </Button>
        </React.Fragment>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonsForNavBottom);
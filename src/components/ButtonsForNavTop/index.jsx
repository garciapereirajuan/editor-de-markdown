import React from 'react';
import Button from '@material-ui/core/Button';
import { FiCode, FiMonitor } from 'react-icons/fi';

const ButtonsForNavTop = ({ onHandlerClick }) => (
    <React.Fragment>
        <Button 
            className="btn-nav-top editor" variant="contained" 
            onClick={()=>onHandlerClick("editor")}
            endIcon={<FiCode />}
            >
            Editor 
        </Button>
        <Button 
            className="btn-nav-top preview" variant="contained" 
            onClick={()=>onHandlerClick("preview")}
            endIcon={<FiMonitor />}
            >
            Vista
        </Button>
    </React.Fragment>
)

export default ButtonsForNavTop;
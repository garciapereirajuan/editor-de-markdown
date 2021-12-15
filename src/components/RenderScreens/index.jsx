import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { changeElementsSize, deviceScreenLimit } from '../../utils/utils';
import mapStateToProps from './../../redux/mapStateToProps';
import mapDispatchToProps from './../../redux/mapDispatchToProps';
import NavTop from './../NavTop';
import Preview from './../Preview';
import Editor from './../Editor';

const RenderScreens = ({ 
    sizeComplete, 
    currentScreen, 
    displayReverse, 
    setSizeEditorAndPreview, 
    setSizeComplete }) => {

    useEffect(()=>{  
        changeElementsSize(sizeComplete, setSizeEditorAndPreview);
        !deviceScreenLimit() && setSizeComplete(true);    
    },[sizeComplete, currentScreen, displayReverse, setSizeEditorAndPreview, setSizeComplete]);

    return (
        <React.Fragment>
        { sizeComplete
            ? (<> <NavTop />
                { currentScreen === "editor"
                        ?  <Editor />
                        :  <Preview /> 
                } </> )
            : displayReverse 
                ? ( <> <Preview /> <Editor /> </> )
                : ( <> <Editor /> <Preview /> </> )
        }
        </React.Fragment>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(RenderScreens);
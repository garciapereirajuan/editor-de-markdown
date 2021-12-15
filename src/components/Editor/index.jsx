import { useEffect } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapStateToProps';
import mapDispatchToProps from '../../redux/mapDispatchToProps';
import { getTabulationTextarea } from '../../utils/utils';
import FrameSizeComplete from '../FrameSizeComplete';
import "./Editor.css";

const Editor = ({ sizeEditor, setEditorValue, editorValue }) => { 
    useEffect(()=>{
        getTabulationTextarea();
    },[])
    return (
        <FrameSizeComplete size={sizeEditor}>
        <textarea
            id="editor" className="editor-preview"
            onChange={(e)=> setEditorValue(e.target.value)}
            value={editorValue}>
        </textarea>
        </FrameSizeComplete>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
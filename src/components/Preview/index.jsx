import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapStateToProps';
import { marked } from 'marked';
import Prism from "prismjs";
import FrameSizeComplete from "../FrameSizeComplete";
import Typography from '@material-ui/core/Typography';
import "./prism-tomorrow.css";
import "./Preview.css";

const renderer = new marked.Renderer();

renderer.link = (href, title, text) => `<a target="_blank" href="${href}">${text}</a>`;

marked.setOptions({
    breaks: true,
    highlight: function(code) {
        return Prism.highlight(code, Prism.languages.javascript, 'javascript');
    }
});

const Preview = ({ sizePreview, editorValue }) => {
    return (
        <FrameSizeComplete size={sizePreview}>
            <Typography 
                id="preview"  className="editor-preview"    
                dangerouslySetInnerHTML={{__html: marked(editorValue, {renderer:renderer})}}
                />
        </FrameSizeComplete>    
    );
}

export default connect(mapStateToProps)(Preview);

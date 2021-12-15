import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapStateToProps';
import Grid from '@material-ui/core/Grid';
import { getClassGrid } from '../../utils/utils';

const FrameSizeComplete = ({ size, sizeComplete, children }) => {
    const classGrid = getClassGrid(sizeComplete);                           
    return(
      <Grid item container className={classGrid} xs={12} 
        sm={size}  md={size} alignItems="center" 
       >
        {children}
      </Grid>
    )
}

export default connect(mapStateToProps)(FrameSizeComplete);
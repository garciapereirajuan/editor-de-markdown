import { getUrl, deviceScreenLimit } from "../../utils/utils";
import ButtonsForNavBottom from "../ButtonsForNavBottom";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { FiGithub, FiExternalLink } from "react-icons/fi";
import "./NavBottom.css";

const NavBottom = () => {  

    const { gitUrl, markdownUrl } = getUrl();
    
    return (
      <Grid 
        container 
        className="bottomBar" 
        justifyContent="center"
        alignItems="center"
       >
        <Grid item container xs={9} sm={3} md={3} lg={3} justifyContent="flex-start">
          <Typography alt="as" id="typography-title" >
            Editor de Markdown
          </Typography>
        </Grid>
          {
            deviceScreenLimit() &&
            <Grid item container xs={0} sm={6} md={6} lg={6} justifyContent="center" alignItems="center" >
               <ButtonsForNavBottom />
            </Grid>
          }
        {/*esta es una segunda capa sobre la bottomBar y si ponse xs={12} no andan los botones del medio*/}
        <Grid item container xs={3} sm={3} md={3} lg={3} className="btns-aux" justifyContent="flex-end" alignItems="center">       
          <Button 
            id="btn-git" 
            target="_blanck"
            href={gitUrl}
            endIcon={<FiGithub />} >
            Repo
          </Button>
          {
            deviceScreenLimit() &&
              <Button 
                id="btn-info" 
                target="_blank" 
                href={markdownUrl}
                endIcon={<FiExternalLink />} 
                >
                Markdown
              </Button>
          }     
         </Grid>
      </Grid>
    );
}

export default NavBottom;
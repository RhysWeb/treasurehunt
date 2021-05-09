import React from "react";
import { useData } from "../DataContext";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import {cosmoClick} from '../cosmoClick.js'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 0, 2),
    fontFamily: "Permanent Marker",
    textAlign: "center",
    fontSize: "40px",
    color: "deeppink",
    textShadow: "1px 1px darkmagenta",
  },
}));

const imgStyle = {
  maxWidth: "20%"
}

export const Header = () => {
  const { data } = useData();
  const styles = useStyles();

  return (
    <Typography className={styles.root} component="h1" variant="h5">
      Rhys's Amazing Treasure Hunt!!
      <div onClick={cosmoClick} class="fade-in-image"><img src={data.photo} alt="cosmo" style={imgStyle}/></div>
    </Typography>   
  );
};

import React from 'react'

import {
  Box,
  Typography,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Grid,
  Divider
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const items = [
  {
    tshirtName: "Black Stripes",
    tshirtImage: "{require(../images/menT.png)}",
    tshirtPrice: "₹400"
  },
  {
    tshirtName: "Black Stripes",
    tshirtImage: "require{C:/Users/Siddharth Deb/Desktop/tclan/src/images/menT.png}",
    tshirtPrice: "₹400"
  },
  {
    tshirtName: "Black Stripes",
    tshirtImage: "require{'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.in%2FSTYLENTO-Sleeve-Round-Cotton-Tshirt%2Fdp%2FB07PNG39DF&psig=AOvVaw2QoOjTrXx-23Fw1I6_k6Sm&ust=1585818960226000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJigx5DyxugCFQAAAAAdAAAAABAj'}",
    tshirtPrice: "₹400"
  },
  {
    tshirtName: "Black Stripes",
    tshirtImage: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.in%2FSTYLENTO-Sleeve-Round-Cotton-Tshirt%2Fdp%2FB07PNG39DF&psig=AOvVaw2QoOjTrXx-23Fw1I6_k6Sm&ust=1585818960226000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJigx5DyxugCFQAAAAAdAAAAABAj",
    tshirtPrice: "₹400"
  },
  {
    tshirtName: "Black Stripes",
    tshirtImage: "{require(../images/menT.png)}",
    tshirtPrice: "₹400"
  },
  {
    tshirtName: "Black Stripes",
    tshirtImage: "require{C:/Users/Siddharth Deb/Desktop/tclan/src/images/menT.png}",
    tshirtPrice: "₹400"
  },
  {
    tshirtName: "Black Stripes",
    tshirtImage: "require{'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.in%2FSTYLENTO-Sleeve-Round-Cotton-Tshirt%2Fdp%2FB07PNG39DF&psig=AOvVaw2QoOjTrXx-23Fw1I6_k6Sm&ust=1585818960226000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJigx5DyxugCFQAAAAAdAAAAABAj'}",
    tshirtPrice: "₹400"
  },
  {
    tshirtName: "Black Stripes",
    tshirtImage: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.in%2FSTYLENTO-Sleeve-Round-Cotton-Tshirt%2Fdp%2FB07PNG39DF&psig=AOvVaw2QoOjTrXx-23Fw1I6_k6Sm&ust=1585818960226000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJigx5DyxugCFQAAAAAdAAAAABAj",
    tshirtPrice: "₹400"
  },
  {
    tshirtName: "Black Stripes",
    tshirtImage: "{require(../images/menT.png)}",
    tshirtPrice: "₹400"
  },
  {
    tshirtName: "Black Stripes",
    tshirtImage: "require{C:/Users/Siddharth Deb/Desktop/tclan/src/images/menT.png}",
    tshirtPrice: "₹400"
  },
  {
    tshirtName: "Black Stripes",
    tshirtImage: "require{'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.in%2FSTYLENTO-Sleeve-Round-Cotton-Tshirt%2Fdp%2FB07PNG39DF&psig=AOvVaw2QoOjTrXx-23Fw1I6_k6Sm&ust=1585818960226000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJigx5DyxugCFQAAAAAdAAAAABAj'}",
    tshirtPrice: "₹400"
  },
  {
    tshirtName: "Black Stripes",
    tshirtImage: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.in%2FSTYLENTO-Sleeve-Round-Cotton-Tshirt%2Fdp%2FB07PNG39DF&psig=AOvVaw2QoOjTrXx-23Fw1I6_k6Sm&ust=1585818960226000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJigx5DyxugCFQAAAAAdAAAAABAj",
    tshirtPrice: "₹400"
  },
]

const useStyles = makeStyles({
  root: {
    maxWidth: "16rem",
    margin: "1rem auto 1rem auto",
    backgroundColor: "#385C5B"
  },
  media: {
    height: "12rem",
    paddingTop: '56.25%', // 16:9,
    marginTop:'30'
  },
  text: {
    fontSize: "1.29rem",
    textAlign: "center"
  },
  button: {
    margin: "0rem 0.275rem",
    height: "3.3rem",
    color: "#9DAB57",
    borderColor: "#9DAB57"
  },
  desc: {
    color: "#9DAB57"
  },
  title: {
    textAlign: "center",
    color: "#9DAB57",
    textTransform: "uppercase"
  }
});

export default function MenSect() {
  const classes = useStyles();

  return (
  <>
    <Typography variant="h2" className={classes.title}>
      Men's Section
    </Typography>
    <Divider />
    <Grid container>
      {items.map((isItem, key) => (
      <Grid item xs={12} sm={6} lg={3} style={{width: "fit-content"}}>
        <Card className={classes.root}>

            <CardMedia
            key={key}
              className={classes.media}
              image={isItem.tshirtImage}
              title={isItem.tshirtName}
              square
            />
            <CardContent className={classes.desc}>
              <Grid container>
                <Grid item xs={8}>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.text}>
                      {isItem.tshirtName}
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.text}>
                      {isItem.tshirtPrice}
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Button variant="outlined" size="small" className={classes.button}>
                    Quick View
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button variant="outlined" size="small" className={classes.button}>
                    Add to cart
                  </Button>
                </Grid>
              </Grid>
            </CardContent>

      </Card>
     </Grid>
      ))}
    </Grid>
  </>
  );
}

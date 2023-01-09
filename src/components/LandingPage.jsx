import { Box, Typography } from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import FlexBox from "./FlexBox";
const Spacer = require("react-spacer");
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: "10px",
  },
  input: {
    color: "rgba(255, 255, 255, 0.5)",
    opacity: "0.9",
  },
  image: {
    paddingTop: "10px",
  },
  typo: {
    textDecoration: "underline",
    textDecorationColor: "#eab676",
    textDecorationThickness: "5px",
    // borderBottom: "10px solid #eab676",
  },
  footerCard: {
    display: "flex",
    flexDirection: "column",
    gap: "22px",
  },
  footerCardM: {
    display: "flex",
    flexDirection: "column",
    gap: "22px",
    margin: "auto",
  },
  footerCardBox: {
    borderLeft: "8px solid #525ded",
    width: "22vw",
    fontWeight: "600",
    textAlign: "justify",
    padding: "10px 10px 10px 20px",
    "&:hover": {
      backgroundColor: "#525ded",
      color: "#FFFFFF",
      borderRadius: "5px",
    },
  },
  footerCardBoxM: {
    borderLeft: "8px solid #525ded",
    width: "42vw",
    fontWeight: "600",
    textAlign: "justify",
    padding: "10px 10px 10px 20px",
    "&:hover": {
      backgroundColor: "#525ded",
      color: "#FFFFFF",
      borderRadius: "5px",
    },
  },
  footerCardLeft: {
    width: "22vw",
    display: "flex",
    gap: "10px",
    alignItems: "center",
    padding: "5px",
    "&:hover": {
      backgroundColor: "#525ded",
      color: "#fff",
      borderRadius: "5px",
      "& img": {
        filter: "brightness(100)",
        color: "#fff",
      },
      "& span:nth-of-type(1)": {
        border: "1px solid #fff",
      },
      "& div:nth-of-type(1) div:nth-of-type(2)": {
        color: "#fff",
      },
    },
  },
  footerCardLeftM: {
    width: "42vw",
    display: "flex",
    gap: "10px",
    alignItems: "center",
    padding: "5px",
    "&:hover": {
      backgroundColor: "#525ded",
      color: "#fff",
      borderRadius: "5px",
      "& img": {
        filter: "brightness(100)",
        color: "#fff",
      },
      "& span:nth-of-type(1)": {
        border: "1px solid #fff",
      },
      "& div:nth-of-type(1) div:nth-of-type(2)": {
        color: "#fff",
      },
    },
  },
  footerCardComments: {
    width: "25vw",
    display: "flex",
    gap: "18px",
    alignItems: "center",
    padding: "5px",
    "& span": {
      borderBottom: "2px solid #525ded",
      width: "20%",
      padding: "10px",
      height: "70%",
    },
  },
  footerCardCommentsM: {
    width: "45vw",
    display: "flex",
    gap: "18px",
    alignItems: "center",
    padding: "5px",
    "& span": {
      borderBottom: "2px solid #525ded",
      width: "20%",
      padding: "10px",
      height: "70%",
    },
  },
  belowCardLeft: {
    border: "1px solid #525ded",
    width: "20%",
    padding: "10px",
    borderRadius: "5px",
    alignItems: "center",
  },
  footer: {
    display: "flex",
    justifyContent: "space-around",
    gap: "30px",
  },
  footerMobile: {
    display: "flex",
    flexDirection: "column",
    gap: "22px",
  },
  footerLeftFeed: {
    display: "flex",
    flexDirection: "column",
    gap: "22px",
    width: "20vw",
  },
  footerLeftFeedM: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    gap: "22px",
    width: "35vw",
  },
}));
function LandingPage() {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:670px)");
  const matchmedia = useMediaQuery("(min-width:1020px)");
  return (
    <Box>
      <Box className={classes.root}>
        <Paper
          component="form"
          sx={
            matches
              ? {
                  top: "10px",
                  display: "flex",
                  alignItems: "center",
                  width: 300,
                  border: "2.5px solid #6770ef",
                }
              : {
                  top: "10px",
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  border: "2.5px solid #6770ef",
                }
          }
        >
          <IconButton
            type="button"
            sx={{ p: "10px", color: "#6770ef" }}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
          <InputBase
            className={classes.input}
            sx={{ ml: 1, flex: 1, color: "#6770ef" }}
            placeholder="Search a Term | Topic"
          />
        </Paper>
      </Box>
      <Box>
        <Box
          sx={
            !matches
              ? { display: "flex", flexDirection: "row", flexWrap: "wrap" }
              : {
                  display: "flex",
                  justifyContent: "space-between",
                  overflowY: "visible",
                  height: "300px",
                }
          }
        >
          <Spacer grow="1" />
          <Box
            sx={
              matches
                ? { textAlign: "start", paddingTop: "20px" }
                : { textAlign: "start", paddingTop: "20px", fontWeight: "600" }
            }
          >
            <Typography
              sx={
                matches
                  ? { color: "#6770ef" }
                  : { color: "#6770ef", fontSize: "22px", fontWeight: "600" }
              }
            >
              Claim a Free Quote
            </Typography>
            <Typography
              variant={matches ? "h3" : "h4"}
              gutterBottom
              component="div"
              sx={{ fontWeight: "600" }}
            >
              <Box className={classes.typo} display="inline">
                Get started
              </Box>{" "}
              on fulfilling your Dubai or UAE dream.
            </Typography>
          </Box>
          <CardMedia
            component="img"
            alt="green iguana"
            className={classes.image}
            height="400"
            image="/Assets/ILLUSTRATION.png"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "column",
            textAlign: "start",
            width: "400px",
          }}
        >
          <Spacer grow="2" />
          <Box>
            <Typography
              sx={
                matches
                  ? matchmedia
                    ? { color: "#6770ef", marginTop: "-30px" }
                    : { color: "#6770ef", marginTop: "200px" }
                  : { color: "#6770ef" }
              }
            >
              UAE & Offshore Company
            </Typography>
          </Box>
          <Typography sx={{ fontWeight: "600", color: "#afafaf" }}>
            We provide you with information about UAE or Offshore Company
            Registration & help you setup your company with a bank account and
            visas.
          </Typography>
          <Box sx={{ display: "flex", textAlign: "start", marginTop: "20px" }}>
            <Box
              sx={{
                bgcolor: "#6770ef",
                color: "#ffff",
                padding: "10px",
                borderRadius: "2px",
                opacity: "1",
              }}
            >
              Start a Company
            </Box>
            <Box
              sx={{
                color: "#6770ef",
                bgcolor: "#ffff",
                padding: "10px",
                borderRadius: "2px",
                border: "1px solid #6770ef",
                opacity: "1",
              }}
            >
              Renew a Company
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={
          matches
            ? {
                display: "flex",
                width: "50%",
                justifyContent: "space-evenly",
                alignItems: "center",
                margin: "auto",
                flexWrap: "wrap",
                marginTop: "110px",
              }
            : {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "110px",
                paddingBottom: "25px",
              }
        }
      >
        <Typography sx={{ color: "#6770ef" }}>
          Watch the video about UAE or Offshore Company Registration
        </Typography>{" "}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "48%",
            padding: "3px 4px 5px 3px",
            border: "1px solid #6770ef",
          }}
        >
          <img src="/Assets/Group 117.png" alt="play button" />
        </Box>
      </Box>
      <Box>
        <Typography
          variant={matches ? "h5" : "h6"}
          gutterBottom
          component="div"
          sx={{ fontWeight: "700", marginTop: "90px" }}
        >
          <Box className={classes.typo}>Dedicated</Box> to our mission we are
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={{
            margin: "auto",
            fontWeight: "600",
            color: "#afafaf",
            textAlign: "match-parent",
            width: "60%",
          }}
        >
          Our services include Company Formation & Renewals, <br /> Trust &
          Fiduciary, Tax Residency Setup With Family, Bank Accounts, Remote
          Management, Stock Trading Platforms, Ownership Solutions
        </Typography>
      </Box>
      <Box
        sx={
          matches
            ? {
                marginTop: "110px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }
            : {
                marginTop: "110px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
              }
        }
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: matches ? "justify" : "center",
            width: matches ? "25%" : "80%",
            flexWrap: "no-wrap",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <Box>
            <img src="/Assets/dungeon.png" alt="Dungen" width="55px" />
          </Box>
          <Box>
            <Typography gutterBottom></Typography>
            <Typography
              gutterBottom
              align={matches ? "left" : "center"}
              fontWeight="600"
            >
              UAE Free Zone Company
            </Typography>
            <Typography
              gutterBottom
              align={matches ? "left" : "center"}
              color="GrayText"
            >
              Your registration agent, will answer all of your questions and
              help you to reach a conclusion that meets your objectives of
              investing in the UAE.
            </Typography>
            <Typography
              gutterBottom
              align={matches ? "left" : "center"}
              color="#F86303"
            >
              Get Started
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: matches ? "justify" : "center",
            width: matches ? "25%" : "80%",
            flexWrap: "no-wrap",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <Box>
            <img src="/Assets/Vector-2.png" alt="Dungen" />
          </Box>
          <Box>
            <Typography gutterBottom></Typography>
            <Typography
              gutterBottom
              align={matches ? "left" : "center"}
              fontWeight="600"
            >
              Dubai Local Companies
            </Typography>
            <Typography
              gutterBottom
              align={matches ? "left" : "center"}
              color="GrayText"
            >
              The Dubai LLC formation documents are actually articles of
              organization or a certificate of organization. You can get yours
              today.
            </Typography>
            <Typography
              gutterBottom
              align={matches ? "left" : "center"}
              color="#F86303"
            >
              Get Started
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: matches ? "justify" : "center",
            width: matches ? "25%" : "80%",
            flexWrap: "no-wrap",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <Box>
            <img src="/Assets/Vector-1.png" alt="Dungen" />
          </Box>
          <Box>
            <Typography gutterBottom></Typography>
            <Typography
              gutterBottom
              align={matches ? "left" : "center"}
              fontWeight="600"
            >
              Offshore Compamies
            </Typography>
            <Typography
              gutterBottom
              align={matches ? "left" : "center"}
              color="GrayText"
            >
              You can register an offshore company and open its bank account in
              Dubai. Your agent will help you along all the process
            </Typography>
            <Typography
              gutterBottom
              align={matches ? "left" : "center"}
              color="#F86303"
            >
              Get Started
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={
          matches
            ? {
                display: "flex",
                margin: "5% 8%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "100px",
              }
            : {
                display: "flex",
                flexDirection: "column",
                gap: "40px",
                alignItems: "center",
                margin: "8% 8%",
              }
        }
      >
        <Box sx={{ display: "flex", gap: "45px", flexDirection: "column" }}>
          <Box sx={matches && { width: "70%" }}>
            <Box>
              <Typography
                gutterBottom
                align={matches ? "left" : "inherit"}
                color="GrayText"
              >
                Learn the ways in which you can benefit from a UAE/Offshore
                Company. Then get started on fulfilling your UAE dream.
              </Typography>
              <Typography
                gutterBottom
                align={matches ? "left" : "center"}
                color="blue"
              >
                Claim a Free Quote
              </Typography>
              <Typography gutterBottom></Typography>
            </Box>
          </Box>
          <Card
            sx={{
              maxWidth: 345,
              padding: "40px 5px",
              border: "1px solid grey",
            }}
          >
            <CardMedia
              sx={{
                height: 140,
                width: 150,
                textAlign: "center",
                margin: "auto",
              }}
              image="/Assets/Group.png"
              title="green iguana"
            />
            <CardContent>
              <Typography
                align="left"
                gutterBottom
                variant="h5"
                component="div"
              >
                Advice & Guidance
              </Typography>
              <Typography align="left" variant="body2" color="text.secondary">
                All activities in the UAE are licensed. Whether manufacturing,
                finance, trading, marketing, consultancy or restaurants. In some
                countries only manufacturing is licensed. In others there is a
                threshold below which business are encouraged. Get our
                insightfull guidance today
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
              <img src="/Assets/Vector.png" alt="arrow" width="15px" />
            </CardActions>
          </Card>
          {matches && (
            <Card
              sx={{
                maxWidth: 345,
                padding: "20px 5px",
                border: "1px solid grey",
              }}
            >
              <CardMedia
                sx={{
                  height: 140,
                  width: 150,
                  textAlign: "center",
                  margin: "auto",
                }}
                image="/Assets/Group.png"
                title="green iguana"
              />
              <CardContent>
                <Typography
                  align="left"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Advice & Guidance
                </Typography>
                <Typography align="left" variant="body2" color="text.secondary">
                  All activities in the UAE are licensed. Whether manufacturing,
                  finance, trading, marketing, consultancy or restaurants. In
                  some countries only manufacturing is licensed. In others there
                  is a threshold below which business are encouraged. Get our
                  insightfull guidance today
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
                <img src="/Assets/Vector.png" alt="arrow" width="15px" />
              </CardActions>
            </Card>
          )}
        </Box>
        <Box sx={{ display: "flex", gap: "50px", flexDirection: "column" }}>
          <Card
            sx={{
              maxWidth: 345,
              padding: "20px 5px",
              border: "1px solid grey",
            }}
          >
            <CardMedia
              sx={{
                height: 140,
                width: 150,
                textAlign: "center",
                margin: "auto",
              }}
              image="/Assets/Group.png"
              title="green iguana"
            />
            <CardContent>
              <Typography
                align="left"
                gutterBottom
                variant="h5"
                component="div"
              >
                Advice & Guidance
              </Typography>
              <Typography align="left" variant="body2" color="text.secondary">
                All activities in the UAE are licensed. Whether manufacturing,
                finance, trading, marketing, consultancy or restaurants. In some
                countries only manufacturing is licensed. In others there is a
                threshold below which business are encouraged. Get our
                insightfull guidance today
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
              <img src="/Assets/Vector.png" alt="arrow" width="15px" />
            </CardActions>
          </Card>
          {matches && (
            <Card
              sx={{
                maxWidth: 345,
                padding: "15px 5px",
                border: "1px solid grey",
              }}
            >
              <CardMedia
                sx={{
                  height: 140,
                  width: 150,
                  textAlign: "center",
                  margin: "auto",
                }}
                image="/Assets/Group.png"
                title="green iguana"
              />
              <CardContent>
                <Typography
                  align="left"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Advice & Guidance
                </Typography>
                <Typography align="left" variant="body2" color="text.secondary">
                  All activities in the UAE are licensed. Whether manufacturing,
                  finance, trading, marketing, consultancy or restaurants. In
                  some countries only manufacturing is licensed. In others there
                  is a threshold below which business are encouraged. Get our
                  insightfull guidance today
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
                <img src="/Assets/Vector.png" alt="arrow" width="15px" />
              </CardActions>
            </Card>
          )}
          <Box sx={matches && { width: "70%", marginTop: "-25px" }}>
            <Box>
              <Typography
                gutterBottom
                align={matches ? "left" : "inherit"}
                color="GrayText"
              >
                <Box sx={matches && { width: "70%" }}>
                  <Box>
                    <Typography
                      gutterBottom
                      align={matches ? "left" : "inherit"}
                      color="GrayText"
                    >
                      Learn the ways in which you can benefit from a
                      UAE/Offshore Company. Then get started on fulfilling your
                      UAE dream.
                    </Typography>
                    <Typography
                      gutterBottom
                      align={matches ? "left" : "center"}
                      color="blue"
                      component="div"
                      fontSize={15}
                    >
                      More about our services{" "}
                      <Box className={classes.typo} display="inline">
                        <img
                          src="/Assets/Vector.png"
                          alt="arrow"
                          width="12px"
                        />
                      </Box>
                    </Typography>
                    <Typography gutterBottom></Typography>
                  </Box>
                </Box>
              </Typography>
              <Typography gutterBottom></Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        alignItems="center"
        flexWrap="wrap"
        sx={{ width: "60%", margin: "auto" }}
      >
        <Typography mt={15} gutterBottom variant="h5" component="div">
          Most{" "}
          <Box className={classes.typo} display="inline">
            {" "}
            popular affordable pricing
          </Box>{" "}
          per jurisdictions are brought to you to kick off your adventure.
        </Typography>
      </Box>
      <div className="body">
        {!matches && (
          <>
            <input type="radio" name="position" />
            <input type="radio" name="position" checked />
            <input type="radio" name="position" />
          </>
        )}
        <main id="carousel">
          <div className="item">
            <div>
              <h2>AJMAN OFFSHORE</h2>
              <p>
                <b style={{ fontSize: "20px" }}>$2,997</b>
                <b style={{ fontSize: "10px", color: "grey" }}>
                  One Time Payment
                </b>
              </p>
              <p>Ajman Offshore New Company formation includes</p>
            </div>
            {list.map((el, i) => {
              return (
                <span
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "left",
                    gap: "10px",
                    fontSize: "10px",
                  }}
                >
                  <img
                    src="/Assets/Group 35.png"
                    alt="Tick mark"
                    width="15px"
                    style={{ color: "#ffff" }}
                    opacity="1"
                  />
                  <p>{el.title}</p>
                </span>
              );
            })}
            <div>
              <button
                style={{
                  padding: "20px",
                  marginLeft: "10px",
                  border: "1px solid blue",
                  width: "90%",
                }}
              >
                Continue
              </button>
            </div>
          </div>
          <div className="item">
            <div>
              <h2>RAK ICC</h2>
              <p>
                <b style={{ fontSize: "20px" }}>$2,997</b>
                <b style={{ fontSize: "10px", color: "grey" }}>
                  One Time Payment
                </b>
              </p>
              <p>Rak Icc New Company formation includes</p>
            </div>
            {list.map((el, i) => {
              return (
                <span
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "left",
                    gap: "10px",
                    fontSize: "10px",
                  }}
                >
                  <img
                    src="/Assets/Group 35.png"
                    alt="Tick mark"
                    width="15px"
                    style={{ color: "#ffff" }}
                    opacity="1"
                  />
                  <p>{el.title}</p>
                </span>
              );
            })}
            <div>
              <button
                style={{
                  padding: "20px",
                  marginLeft: "10px",
                  border: "1px solid blue",
                  width: "90%",
                }}
              >
                Continue
              </button>
            </div>
          </div>
          <div className="item">
            <div>
              <h2>SHARJAH MEDIA CITY</h2>
              <p>
                <b style={{ fontSize: "20px" }}>$2,997</b>
                <b style={{ fontSize: "10px", color: "grey" }}>
                  One Time Payment
                </b>
              </p>
              <p>Sharjah Media City New Company formation include</p>
            </div>
            <div style={{ lineHeight: "-5px" }}>
              {list.map((el, i) => {
                return (
                  <span
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "left",
                      gap: "10px",
                      fontSize: "10px",
                    }}
                  >
                    <img
                      src="/Assets/Group 35.png"
                      alt="Tick mark"
                      width="15px"
                      height="15px"
                      style={{ color: "#ffff" }}
                      opacity="1"
                    />
                    <p>{el.title}</p>
                  </span>
                );
              })}
            </div>
            <div>
              <button
                style={{
                  padding: "20px",
                  marginLeft: "10px",
                  border: "1px solid blue",
                  width: "90%",
                }}
              >
                Continue
              </button>
            </div>
          </div>
        </main>
      </div>
      <Box
        mt="50px"
        className={matchmedia ? classes.footer : classes.footerMobile}
      >
        <Box className={matchmedia ? classes.footerCard : classes.footerCardM}>
          <Box
            className={
              matchmedia ? classes.footerCardBox : classes.footerCardBoxM
            }
          >
            Read about our blogs for more information on our processes{" "}
          </Box>
          <Box
            className={
              matchmedia ? classes.footerCardLeft : classes.footerCardLeftM
            }
          >
            <Box component="span" className={classes.belowCardLeft}>
              <img
                src="Assets/Vector-4.png"
                alt="feeds"
                width="85%"
                height="85%"
              />
            </Box>
            <FlexBox
              flexDirection="column"
              justifyContent="start"
              textAlign="left"
              gap="10px"
            >
              <Box>How to start a company formation in Dubai</Box>
              <Box color="blue">5 Minutes</Box>
            </FlexBox>
          </Box>
          <Box
            className={
              matchmedia ? classes.footerCardLeft : classes.footerCardLeftM
            }
          >
            <Box component="span" className={classes.belowCardLeft}>
              <img
                src="Assets/Vector-4.png"
                alt="feeds"
                width="85%"
                height="85%"
              />
            </Box>
            <FlexBox
              flexDirection="column"
              justifyContent="start"
              textAlign="left"
              gap="10px"
            >
              <Box>How to start a company formation in Dubai</Box>
              <Box color="blue">5 Minutes</Box>
            </FlexBox>
          </Box>
          {matches ? (
            <Box
              className={
                matchmedia ? classes.footerCardLeft : classes.footerCardLeftM
              }
            >
              <Box component="span" className={classes.belowCardLeft}>
                <img
                  src="Assets/Vector-4.png"
                  alt="feeds"
                  width="85%"
                  height="85%"
                />
              </Box>
              <FlexBox
                flexDirection="column"
                justifyContent="start"
                textAlign="left"
                gap="10px"
              >
                <Box>How to start a company formation in Dubai</Box>
                <Box color="blue">5 Minutes</Box>
              </FlexBox>
            </Box>
          ) : null}
          <Box
            className={
              matchmedia ? classes.footerCardBox : classes.footerCardBoxM
            }
          >
            Satidfied We are When Our Customers Are Happy
          </Box>
          <Box
            className={
              matchmedia
                ? classes.footerCardComments
                : classes.footerCardCommentsM
            }
          >
            <Box component="span">
              <img
                src="Assets/Vector-3.png"
                alt="feeds"
                width="40px"
                height="40px"
              />
            </Box>
            <FlexBox
              flexDirection="column"
              justifyContent="start"
              textAlign="left"
              gap="10px"
            >
              <Box>
                I am very happy with them. I’ll continue to use their services
                in future & highly recommend them to anyone,
              </Box>
              <Box color="black">Muhib Abrar</Box>
            </FlexBox>
          </Box>
          <Box
            className={
              matchmedia
                ? classes.footerCardComments
                : classes.footerCardCommentsM
            }
          >
            <Box component="span">
              <img
                src="Assets/Vector-3.png"
                alt="feeds"
                width="40px"
                height="40px"
              />
            </Box>
            <FlexBox
              flexDirection="column"
              justifyContent="start"
              textAlign="left"
              gap="10px"
            >
              <Box>
                I am very happy with them. I’ll continue to use their services
                in future & highly recommend them to anyone,
              </Box>
              <Box color="black">Muhib Abrar</Box>
            </FlexBox>
          </Box>
          {matches && (
            <Box
              className={
                matchmedia
                  ? classes.footerCardComments
                  : classes.footerCardCommentsM
              }
            >
              <Box component="span">
                <img
                  src="Assets/Vector-3.png"
                  alt="feeds"
                  width="40px"
                  height="40px"
                />
              </Box>
              <FlexBox
                flexDirection="column"
                justifyContent="start"
                textAlign="left"
                gap="10px"
              >
                <Box>
                  I am very happy with them. I’ll continue to use their services
                  in future & highly recommend them to anyone,
                </Box>
                <Box color="black">Muhib Abrar</Box>
              </FlexBox>
            </Box>
          )}
        </Box>
        <Box>
          <Box
            className={
              matchmedia ? classes.footerLeftFeed : classes.footerLeftFeedM
            }
          >
            <Box
              className={
                matchmedia ? classes.footerCardBox : classes.footerCardBoxM
              }
            >
              Satidfied We are When Our Customers Are Happy
            </Box>
            <Box textAlign="left" paddingLeft="10%">
              <Typography component="h5" fontWeight="600">
                Services
              </Typography>
              <Typography color="gray" fontWeight="400">
                Products
              </Typography>
              <Typography color="gray" fontWeight="400">
                Solutions
              </Typography>
              <Typography color="gray" fontWeight="400">
                Assurance
              </Typography>
              <Typography color="gray" fontWeight="400">
                FAQ
              </Typography>
              <Typography color="gray" fontWeight="400">
                Working at Varal-Singhania
              </Typography>
            </Box>
            <Box textAlign="left" paddingLeft="10%">
              <Typography component="h5" fontWeight="600">
                Policies
              </Typography>
              <Typography color="gray" fontWeight="400">
                Privacy Policy
              </Typography>
              <Typography color="gray" fontWeight="400">
                Terms & Conditions
              </Typography>
            </Box>
            <Box textAlign="left" paddingLeft="10%">
              <Typography component="h5" fontWeight="600">
                About Us
              </Typography>
              <Typography color="gray" fontWeight="600">
                About Us
              </Typography>
              <Typography color="gray" fontWeight="600">
                Contact Us
              </Typography>
            </Box>
            <Box
              textAlign="left"
              paddingLeft="10%"
              overflow="hidden"
              textOverflow="ellipsis"
            >
              <Typography component="h5" fontWeight="600">
                Address
              </Typography>
              <Typography color="gray" fontWeight="400" noWrap="true">
                608 One Lake Plaza, Cluster T, Al Sarayat Street, Jumeirah Lake
                Towers
              </Typography>
              <Typography color="gray" fontWeight="400">
                Dubai
              </Typography>
              <Typography color="gray" fontWeight="400" gutterBottom>
                United Arab Emirates
              </Typography>
              <Typography color="gray" fontWeight="400" textOverflow="clip">
                Office Hours: Sunday to Thursday 8:30 AM to 6:30 PM [GMT+4]
              </Typography>
              <Typography color="gray" fontWeight="400" textOverflow="clip">
                M: +971 55 794 2016
              </Typography>
              <Typography color="gray" fontWeight="400" textOverflow="clip">
                O: +971 4 447 2061
              </Typography>
            </Box>
            <Box sx={matchmedia ? {display: "flex"}: {display: "block"}}>
              <Box textAlign="left" paddingLeft="10%">
                <Typography component="h5" fontWeight="600">
                  Subscribe Now
                </Typography>
                <Typography color="gray" fontWeight="400">
                  Sunbscribe now to receive our Newsletters about amazing
                  opportunities in Dubai
                </Typography>
              </Box>
            </Box>
            <Box paddingLeft="10%">
              <Box
                component="span"
                sx={{ display: "flex", marginBottom: "20px" }}
              >
                <input type="search" id="" style={{ padding: "8px" }} />
                <img
                  src="Assets/Group 34.png"
                  alt="Enter Button"
                  width="30px"
                />
              </Box>
              <Box sx={{ display: "flex", gap: "15px" }}>
                <img
                  src="Assets/Vector-5.png"
                  alt="facebook"
                  width="20px"
                  height="20px"
                />
                <img
                  src="Assets/Vector-6.png"
                  alt="instagram"
                  width="20px"
                  height="20px"
                />
                <img
                  src="Assets/Vector-7.png"
                  alt="youtube"
                  width="20px"
                  height="20px"
                />
                <img
                  src="Assets/Vector-8.png"
                  alt="linkedin"
                  width="20px"
                  height="20px"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default LandingPage;

const list = [
  { title: "Attestation Charges" },
  { title: "Registered Agent" },
  { title: "Registered Office" },
  { title: "Varal Administrative" },
  { title: "Preparing Statutory File" },
  { title: "Liasing with Registration Authorities" },
  { title: "Due Diligence Appraisal" },
  { title: "Keeping The Register" },
  { title: "Seal Charges" },
  { title: "Certificate of Good Standing" },
];

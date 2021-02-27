import React, { useState, useEffect } from "react";
import {
  Card,
  TextField,
  Typography,
  makeStyles,
  InputAdornment,
  MenuItem,
  Button,
  Checkbox,
  FormControlLabel,
  Stepper,
  Step,
  StepLabel,
  CardMedia,
} from "@material-ui/core";

import {
  Email,
  Face,
  Home,
  Phone,
  EmojiTransportation,
  Business,
  QuestionAnswer,
} from "@material-ui/icons";

const getSteps = () => {
  return [
    "Filling the application form correctly",
    "Add a picture of payment success.",
    "Some Final touch.",
  ];
};

const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='100%25' gradientTransform='rotate(240)'%3E%3Cstop offset='0' stop-color='%23ffffff'/%3E%3Cstop offset='1' stop-color='%234FE'/%3E%3C/linearGradient%3E%3Cpattern patternUnits='userSpaceOnUse' id='b' width='540' height='450' x='0' y='0' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='0.1'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect x='0' y='0' fill='url(%23b)' width='100%25' height='100%25'/%3E%3C/svg%3E")`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
  },
  card: {
    maxWidth: "80%",
    minWidth: "80%",
    padding: 50,
    marginBottom: 20,
    display: "flex",
    flexDirection: "column",
    justifyItems: "flex-start",
    position: "relative",
  },
  TextField: {
    width: "90%",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

const BookingEvent = () => {
  const classes = useStyles();
  const [activeState, setActiveState] = useState(0);
  const steps = getSteps();

  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
    PhNumber: "",
    gender: "",
    profession: "",
    company: "",
    DOB: "",
    medication: "",
    psychiatric: "",
    MSEF: "",
    about_this_program: "",
    paymentImage: "",
  });

  useEffect(() => {
    setUser({ ...user, paymentImage: localStorage.getItem("payment-image") });
  }, []);

  const [Disease, setDisease] = useState({
    Asthma: false,
    Epilepsy: false,
    HighbloodPressure: false,
    Heartproblem: false,
    Pregnancy: false,
  });

  const handleBack = () => {
    setActiveState((prevActiveStep) => prevActiveStep - 1);
  };

  const handleNext = () => {
    setActiveState((prevActiveStep) => prevActiveStep + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/suvrajit/google_sheets/mcZBIdAXCeycrJJr?tabId=Sheet1",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [
              user.name,
              user.email,
              user.address,
              user.PhNumber,
              user.gender,
              user.profession,
              user.company,
              new Date().toISOString(),
            ],
          ]),
        }
      );

      await response.json();
      setUser({
        name: "",
        email: "",
        address: "",
        PhNumber: "",
        gender: "",
        profession: "",
        company: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card className={classes.card}>
              <Typography variant="body1">
                Eagle Rebirth Retreat 26th December to 31st December 2020
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Venue: Eagleganj, Khalisamari, Alipurduar
              </Typography>
            </Card>
            <Card className={classes.card}>
              <TextField
                type="text"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                label="Name"
                className={classes.TextField}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Face />
                    </InputAdornment>
                  ),
                }}
                required
              />
            </Card>
            <Card className={classes.card}>
              <TextField
                type="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                label="Email"
                className={classes.TextField}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Email />
                    </InputAdornment>
                  ),
                }}
                required
              />
            </Card>
            <Card className={classes.card}>
              <TextField
                type="text"
                value={user.address}
                onChange={(e) => setUser({ ...user, address: e.target.value })}
                label="Address"
                name="YPqjbf"
                className={classes.TextField}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Home />
                    </InputAdornment>
                  ),
                }}
                required
              />
            </Card>
            <Card className={classes.card}>
              <TextField
                type="number"
                value={user.PhNumber}
                onChange={(e) => setUser({ ...user, PhNumber: e.target.value })}
                label="Phone Number"
                className={classes.TextField}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Phone />
                    </InputAdornment>
                  ),
                }}
                required
              />
            </Card>
            <Card className={classes.card}>
              <TextField
                select
                label="Gender"
                value={user.gender}
                onChange={(e) => setUser({ ...user, gender: e.target.value })}
                className={classes.TextField}
                required
              >
                <MenuItem value="Male">MALE</MenuItem>
                <MenuItem value="Female">FEMALE</MenuItem>
                <MenuItem value="Other">OTHER</MenuItem>
              </TextField>
            </Card>
            <Card className={classes.card}>
              <TextField
                type="text"
                value={user.profession}
                onChange={(e) =>
                  setUser({ ...user, profession: e.target.value })
                }
                label="Profession"
                name="YPqjbf"
                className={classes.TextField}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <EmojiTransportation />
                    </InputAdornment>
                  ),
                }}
                required
              />
            </Card>
            <Card className={classes.card}>
              <TextField
                type="text"
                value={user.company}
                onChange={(e) => setUser({ ...user, company: e.target.value })}
                label="Company / Institution Name"
                name="YPqjbf"
                className={classes.TextField}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Business />
                    </InputAdornment>
                  ),
                }}
                required
              />
            </Card>
            <Card className={classes.card}>
              <label>Date of birth</label>
              <input
                type="date"
                value={user.DOB}
                onChange={(e) => setUser({ ...user, DOB: e.target.value })}
              />
            </Card>
            <Card className={classes.card}>
              <Typography variant="body1" color="textSecondary">
                1. Are you experiencing any of the following?
              </Typography>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Disease.Asthma}
                    onChange={(e) =>
                      setDisease({
                        ...Disease,
                        Asthma: e.target.checked,
                      })
                    }
                  />
                }
                label="Asthma"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Disease.Epilepsy}
                    onChange={(e) =>
                      setDisease({
                        ...Disease,
                        Epilepsy: e.target.checked,
                      })
                    }
                  />
                }
                label="Epilepsy"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Disease.HighbloodPressure}
                    onChange={(e) =>
                      setDisease({
                        ...Disease,
                        HighbloodPressure: e.target.checked,
                      })
                    }
                  />
                }
                label="High blood Pressure"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Disease.Heartproblem}
                    onChange={(e) =>
                      setDisease({
                        ...Disease,
                        Heartproblem: e.target.checked,
                      })
                    }
                  />
                }
                label="Heart problem"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Disease.Pregnancy}
                    onChange={(e) =>
                      setDisease({
                        ...Disease,
                        Pregnancy: e.target.checked,
                      })
                    }
                  />
                }
                label="Pregnancy"
              />
            </Card>
            <Card className={classes.card}>
              <Typography variant="body1">
                2. Are you currently taking any prescribed medication? If Yes
                please Specify-
              </Typography>
              <TextField
                type="text"
                value={user.medication}
                onChange={(e) =>
                  setUser({ ...user, medication: e.target.value })
                }
                placeholder="feel free to answer.."
                className={classes.TextField}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <QuestionAnswer />
                    </InputAdornment>
                  ),
                }}
                required
              />
            </Card>
            <Card className={classes.card}>
              <Typography variant="body1">
                3. Have you ever undergone psychiatric treatment? If Yes Please
                specify-
              </Typography>
              <TextField
                type="text"
                value={user.psychiatric}
                onChange={(e) =>
                  setUser({ ...user, psychiatric: e.target.value })
                }
                placeholder="feel free to answer.."
                className={classes.TextField}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <QuestionAnswer />
                    </InputAdornment>
                  ),
                }}
                required
              />
            </Card>
            <Card className={classes.card}>
              <Typography variant="body1">
                4. Have you done any other MSEF program? If Yes Please specify-
              </Typography>
              <TextField
                type="text"
                value={user.MSEF}
                onChange={(e) => setUser({ ...user, MSEF: e.target.value })}
                placeholder="feel free to answer.."
                className={classes.TextField}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <QuestionAnswer />
                    </InputAdornment>
                  ),
                }}
                required
              />
            </Card>
            <Card className={classes.card}>
              <Typography variant="body1">
                5. How did you come to know about this program?
              </Typography>
              <TextField
                type="text"
                value={user.about_this_program}
                onChange={(e) =>
                  setUser({ ...user, about_this_program: e.target.value })
                }
                placeholder="feel free to answer.."
                className={classes.TextField}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <QuestionAnswer />
                    </InputAdornment>
                  ),
                }}
                required
              />
            </Card>
            <Card className={classes.card}>
              <Typography
                variant="h6"
                style={{ textAlign: "center", marginBottom: 10 }}
              >
                Guidelines
              </Typography>
              <Typography variant="body1" style={{ marginBottom: 15 }}>
                1 : Course participants must attend all sessions of the courses
                without any exception.
              </Typography>
              <Typography variant="body1" style={{ marginBottom: 15 }}>
                2 : Please bring adequate seasonal dress, an extra blanket and
                bed sheet, track suit for exercise, one white traditional dress
                for Celebration of Rebirth!
              </Typography>
              <Typography variant="body1" style={{ marginBottom: 15 }}>
                3 : Please bring recent clinical test reports related to your
                ailments, if any. Please bring a write up on your personal
                history-- physical illness, mental issues, relationship issues,
                socio-politico-economic-spiritual issues to the best of your
                knowledge and belief.
              </Typography>
              <Typography variant="body1" style={{ marginBottom: 15 }}>
                4 : No outside food, tobacco, alcoholic beverages will be
                allowed in the venue. No children will be allowed with parents
                except for the participants!
              </Typography>
              <Typography variant="body1" style={{ marginBottom: 15 }}>
                5 : In view of the Covid-19 Pandemic situation, proper Hand
                Sanitization, use of Facemasks and social distancing norms set
                the Government are to be strictly maintained
              </Typography>
              <Typography variant="body1" style={{ marginBottom: 15 }}>
                6 : This is a completely Residential Retreat. Number of
                participants will be limited to 49 only! No mobiles can be used
                during the Retreat, strict silence is to be maintained during
                the Retreat!
              </Typography>
              <Typography variant="body1" style={{ marginBottom: 15 }}>
                7 : Those who can exercise, walk and take personal care without
                outside assistance can participate!
              </Typography>
            </Card>
          </div>
        );
      case 1:
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card className={classes.card}>
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  top: 0,
                  left: 0,
                  height: 50,
                  backgroundColor: "#0077b6",
                  color: "white",
                  fontSize: 20,
                  padding: "5px 0 0 5px",
                }}
              >
                EXPENSES
              </div>
              <Typography
                variant="h6"
                color="textSecondary"
                style={{ marginTop: 20 }}
              >
                NO PROFESSIONAL CHARGES FOR THE RETREAT WILL BE CHARGED AS OF
                NOW, ONLY EXPENSES TOWARDS EAGLE LEVEL FOOD/LODGE/ARRANGEMENTS
                WILL BE CHARGED FOR EACH PARTICIPANT, BOTH OLD AND NEW
                PARTICIPANTS.🤍EXPENSES FOR DECEMBER 26 TO 31, 2020 RETREAT IS ₹
                7,500.00 PER HEAD
              </Typography>
            </Card>
            <Card className={classes.card}>
              <Typography variant="body2">
                PAY 7500/- TO "MAA SARASWATI EDUCATIONAL FOUNDATION", A/C NO-
                34488004698, IFSC- SBIN0001831. AND AFTER PAYMENT UPLOAD YOUR
                PAYMENT CONFIRMATION PAGE HERE-
              </Typography>
              {user.paymentImage !== "" && (
                <CardMedia
                  image={user.paymentImage}
                  style={{ width: "100%", height: 200 }}
                  alt="payment"
                />
              )}
              <input
                style={{ marginTop: 20 }}
                type="file"
                onChange={(e) => {
                  const reader = new FileReader();

                  reader.addEventListener("load", () => {
                    localStorage.setItem("payment-image", reader.result);
                    setUser({ ...user, paymentImage: reader.result });
                  });

                  reader.readAsDataURL(e.target.files[0]);
                }}
              />
            </Card>
          </div>
        );
      case 2:
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card className={classes.card}>
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  top: 0,
                  left: 0,
                  height: 50,
                  backgroundColor: "#0077b6",
                  color: "white",
                  fontSize: 20,
                  padding: "5px 0 0 5px",
                }}
              >
                UNDERTAKING
              </div>
              <Typography
                variant="h6"
                color="textSecondary"
                style={{ marginTop: 20 }}
              >
                I hereby willingly undertake to attend Eagle Rebirth Retreat for
                my well-being at my own risk and will not lay blame under any
                circumstances for any loss, damage or possible injuries to
                person or property. I further identify MSEF or anyone related to
                MSEF against all claims and suits and state that MSEF will bear
                no liability should any medical matter both physical and mental
                arise during Eagle Rebirth Retreat and I shall be financially
                responsible for any consequential medical expenses. I
                acknowledge MSEF's all terms and conditions given and through
                workbooks undertakings, posters, and volunteers. I have
                understood the contents translated and read to me in a language
                that I fully understand. I confirm that I have read and
                understand this undertaking prior to signing it/this undertaking
                has been read over and explained to me in a language I
                understood prior to my signing it. Upload your sign here-
              </Typography>
            </Card>
            <Card className={classes.card}></Card>
          </div>
        );
      default:
        return "Unknown step";
    }
  };

  return (
    <div className={classes.root}>
      <div
        style={{
          marginTop: 100,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          style={{
            maxWidth: "80%",
            minWidth: "80%",
            padding: 20,
            marginBottom: 20,
          }}
        >
          <Typography variant="h4">Contact information</Typography>
          <Typography variant="body2" color="textSecondary">
            Eagle Rebirth Retreat 2020-2021
          </Typography>
        </Card>
        <form onSubmit={handleSubmit} className={classes.form}>
          {activeState === steps.length ? (
            <Typography>All steps completed - you&apos;re finished</Typography>
          ) : (
            getStepContent(activeState)
          )}

          <Stepper activeStep={activeState}>
            {steps.map((label, index) => {
              return (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          <div>
            <Button
              disabled={activeState === 0}
              color="primary"
              variant="contained"
              style={{ margin: "15px 25px 15px 0" }}
              onClick={handleBack}
            >
              Back
            </Button>
            {activeState === steps.length - 1 ? (
              <Button
                style={{ margin: "15px 0 15px 0" }}
                type="submit"
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
            ) : (
              <Button
                color="primary"
                variant="contained"
                style={{ margin: "15px 0 15px 0" }}
                onClick={handleNext}
              >
                {activeState === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingEvent;

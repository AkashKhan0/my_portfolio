import React from 'react';
import './Service.css';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
// import { autoPlay } from 'react-swipeable-views-utils';


// images 
import one from './images/one.PNG';
import two from './images/two.PNG';
import three from './images/three.PNG';
import four from './images/four.PNG';
import five from './images/five.PNG';
import six from './images/six.PNG';
import seven from './images/seven.PNG';
import eight from './images/eight.PNG';
import nine from './images/nine.PNG';
import ten from './images/ten.PNG';
import eleven from './images/eleven.PNG';
import baro from './images/baro.PNG';



const AutoPlaySwipeableViews = (SwipeableViews);

const images = [
    {
        label: 'Product list',
        imgPath: one,
    },
    {
        label: 'Number Counter',
        imgPath: two,
    },
    {
        label: 'Comment add, delete and edit',
        imgPath: three,
    },
    {
        label: 'Text Background Video',
        imgPath: four,
    },
    {
        label: 'Login form',
        imgPath: five,
    },
    {
        label: 'Verification by phone Number',
        imgPath: six,
    },
    {
        label: 'Business website',
        imgPath: seven,
    },
    {
        label: 'Strength password',
        imgPath: eight,
    },
    {
        label: 'BMI Calculator',
        imgPath: nine,
    },
    {
        label: 'React Weather App',
        imgPath: ten,
    },
    {
        label: 'Country code selector',
        imgPath: eleven,
    },
    {
        label: 'Business Website',
        imgPath: baro,
    },
];

const Service = () => {

    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step:number) => {
        setActiveStep(step);
    };

    return (
        <>
        <div className="fullServices">
            <div className="cotainer_services">
            


        <Box sx={{ maxWidth: 600, flexGrow: 1 }}>
            <Paper
                square
                elevation={0}
                sx={{
                display: 'flex',
                alignItems: 'center',
                height: 50,
                pl: 2,
                bgcolor: 'background.default',
                }}
            >
                <Typography>{images[activeStep].label}</Typography>
            </Paper>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((step, index) => (
                <div key={step.label}>
                    {Math.abs(activeStep - index) <= 2 ? (
                    <Box
                        component="img"
                        sx={{
                        height: 255,
                        display: 'block',
                        maxWidth: 600,
                        overflow: 'hidden',
                        width: '100%',
                        }}
                        src={step.imgPath}
                        alt={step.label}
                    />
                    ) : null}
                </div>
                ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                <Button
                    size="small"
                    onClick={handleNext}
                    disabled={activeStep === maxSteps - 1}
                >
                    Next
                    {theme.direction === 'rtl' ? (
                    <KeyboardArrowLeft />
                    ) : (
                    <KeyboardArrowRight />
                    )}
                </Button>
                }
                backButton={
                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                    {theme.direction === 'rtl' ? (
                    <KeyboardArrowRight />
                    ) : (
                    <KeyboardArrowLeft />
                    )}
                    Back
                </Button>
                }
            />
        </Box>


            
            </div>
        </div>
        </>
    )
}

export default Service;
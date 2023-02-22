import React from 'react';
import './Review.css';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';


import rone from '../images/r1.PNG';
import rtwo from '../images/r2.PNG';
import rthree from '../images/r3.PNG';
import rfour from '../images/r4.PNG';
import rfive from '../images/r5.PNG';


const AutoPlaySwipeableViews = (SwipeableViews);
const images = [
    {
        imgPath: rone,
    },
    {
        imgPath: rtwo,
    },
    {
        imgPath: rthree,
    },
    {
        imgPath: rfour,
    },
    {
        imgPath: rfive,
    },
];


const Review = () => {


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
            <div className="fullReview">
            
            <Box sx={{ maxWidth: 600, flexGrow: 1 }}>
            <Paper
                square
                elevation={0}
                sx={{
                display: 'flex',
                alignItems: 'center',
                height: 30,
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
        </>
    )
}

export default Review;
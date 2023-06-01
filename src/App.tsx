import React from 'react';
import {
    AppBar,
    Button,
    Grid,
    Toolbar,
    Typography,
    Box,
    IconButton,
    useTheme,
    Link,
    TextField,
} from '@mui/material';

import { GitHub, Search, QuestionAnswer, Code, Email } from '@mui/icons-material';
import { CustomComponent } from './components/CustomComponent';
import EatonSmall from './assets/eaton.svg';
import EatonFooter from './assets/eatonfooter.svg';
import background from './assets/Background.svg';
import design from './assets/buildingDesign.png';

const styles = {
    mainContainer: {
        height: 750,
        backgroundImage: `url(${background})`,
    },

    footerContainer: {
        backgroundColor: '#1D2529',
        color: '#FFFFFF',
    },
};

export const App = (): JSX.Element => {
    const theme = useTheme();

    return (
        <Box sx={{ backgroundColor: theme.palette.background.paper, minHeight: '100vh', position: 'relative' }}>
            <AppBar position={'static'} sx={{ backgroundColor: 'white' }} elevation={5}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="logo">
                        <img src={EatonSmall} alt="logo" height="15px" />
                    </IconButton>
                    <Typography variant={'h6'} color={'#424E54'} sx={{ flexGrow: 1 }}>
                        Innersource Portal
                    </Typography>
                    <Button sx={{ backgroundColor: '#007BC1', color: 'white' }}>
                        <GitHub />
                        &nbsp; Log In with GitHub
                    </Button>
                </Toolbar>
            </AppBar>

            <Grid container spacing={0} style={styles.mainContainer}>
                
                <Grid item xs={7}>
                    <Box
                        sx={{
                            minHeight: '75vh',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            // p: `${theme.spacing(25)} ${theme.spacing(35)}`,
                        }}
                    >
                        <Box style={{ maxWidth: 600 }}>
                            <Typography variant="h2">All of Eaton.</Typography>
                            <Typography variant="h1">Shared.</Typography>
                            <br></br>
                            <br></br>
                            <Button sx={{ backgroundColor: '#007BC1', color: 'white' }}>
                                <GitHub />
                                &nbsp; Log In with GitHub
                            </Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={5}>
                    <Box
                        sx={{
                            minHeight: '75vh',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            // p: `${theme.spacing(25)} ${theme.spacing(0)}`,
                        }}
                    >
                        <Box style={{ maxWidth: 600 }}>
                            <Typography variant={'h4'} color={'#727E84'}>
                                Explore, share, discuss, and contribute your code with other fellow Eaton developers at
                                the{' '}
                            </Typography>
                            <Typography variant={'h4'} color={'#424E54'}>
                                <strong>Innersource portal.</strong>
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <img src={design} alt="design"  width={"100%"} />
            </Grid>

            

            <Box
                sx={{
                    backgroundColor: '#007BC1',
                    minHeight: '90vh',
                    color: 'white',
                    p: `${theme.spacing(25)} ${theme.spacing(36)}`,
                }}
            >
                <Typography variant="h3"> How does Innersource Portal work?</Typography>
                <br></br>
                <Grid container rowSpacing={4} columnSpacing={{ xs: 1 }}>
                    <Grid item xs={12}>
                        <CustomComponent
                            Icon={Search}
                            title="Look up resources contributed by other developers"
                            description="Lorem Ipsum Dor Si. Programmers share their work with a wide audience, instead of
                                        just with a manager or team. In most open source projects, anyone in the world is
                                        free to view the code, comment on it, learn new skills by examining it, and submit
                                        changes that they think will improve it or customize it to their needs."
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <CustomComponent
                            Icon={QuestionAnswer}
                            title="Participate in Discussions"
                            description="Lorem Ipsum Dor Si. Programmers share their work with a wide audience, instead of
                                        just with a manager or team. In most open source projects, anyone in the world is
                                        free to view the code, comment on it, learn new skills by examining it, and submit
                                        changes that they think will improve it or customize it to their needs."
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <CustomComponent
                            Icon={Code}
                            title="Contribute to the Innersource Portal"
                            description="Lorem Ipsum Dor Si. Programmers share their work with a wide audience, instead of
                                        just with a manager or team. In most open source projects, anyone in the world is
                                        free to view the code, comment on it, learn new skills by examining it, and submit
                                        changes that they think will improve it or customize it to their needs."
                        />
                    </Grid>
                </Grid>
            </Box>

            <Grid container style={styles.footerContainer}>
                <Grid item xs={7}>
                    <Box
                        sx={{
                            p: `${theme.spacing(10)} ${theme.spacing(23)}`,
                        }}
                    >
                        <IconButton edge="start" color="inherit" aria-label="logo">
                            <img src={EatonFooter} alt="logo" height="30px" />
                        </IconButton>

                        <Typography>
                            Website maintained by the{' '}
                            <Link href="#" underline="always">
                                Innersource Portal
                            </Link>{' '}
                            team.{' '}
                            <Link href="#" underline="always">
                                Let us know what you think
                            </Link>
                        </Typography>
                        <Typography>All rights reserved.</Typography>
                    </Box>
                </Grid>
                <Grid item xs={5}>
                    <Box
                        sx={{
                            p: `${theme.spacing(9)} ${theme.spacing(0)}`,
                        }}
                    >
                        <Typography variant="h6">Join Our Mailing List!</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <Email sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                            <TextField id="input-with-sx" label="Email" variant="standard" />
                            &nbsp;&nbsp;
                            <Button sx={{ backgroundColor: '#007BC1', color: 'white' }}> Sign Me Up!</Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

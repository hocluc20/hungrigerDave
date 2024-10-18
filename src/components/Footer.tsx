import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';


function Copyright() {
    return (
        <Typography variant="body2" color="white">
            <Link color="inherit" href="https://www.dectria.com/">
                <h4 style={{display: "inline-block"}}>HTBLA Kaindorf</h4>
            </Link>
            <h4 style={{display: "inline-block", marginLeft: '10px'}}>{'Copyright © '}{new Date().getFullYear()}</h4>


            <br/>
            <h3>Made by Lukas and Maxi 5CHIF</h3>
            <Link  fontSize="large" color="inherit" href="https://www.instagram.com/">
                <InstagramIcon/>
            </Link>
            <Link fontSize="large" color="inherit" href="https://www.linkedin.com/">
                <LinkedInIcon/>
            </Link>
            <Link fontSize="large" color="inherit" href="https://www.facebook.com/">
                <FacebookIcon/>
            </Link>

        </Typography>
    );
}
const defaultTheme = createTheme();
export default function Footer() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '20vh',
                }}
            >
                <CssBaseline />
                <Box
                    component="footer"
                    sx={{
                        py: 3,
                        px: 2,
                        mt: 'auto',
                        backgroundColor: `#696969`,
                        bottom: 0,
                        width: '100%',
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography variant="body1" color="white">
                            <h2>HungrigerDave</h2>
                        </Typography>
                        <Copyright />
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}
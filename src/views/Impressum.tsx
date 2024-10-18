import { Container, Typography, Grid, Link, Box } from "@mui/material";

const Impressum = () => {
    return (
        <Container maxWidth="md">
            <Box my={5}>
                <Typography variant="h4" gutterBottom>
                    Impressum
                </Typography>

                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant="h6">Information according to § 5 TMG</Typography>
                        <Typography>
                            <strong>Company Name: </strong>Your Company Name GmbH
                            <br />
                            <strong>Address: </strong>Example Street 1, 12345 Sample City, Country
                            <br />
                            <strong>Telephone: </strong>+49 123 456789
                            <br />
                            <strong>Email: </strong>info@example.com
                            <br />
                            <strong>Website: </strong>www.example.com
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="h6">Represented by:</Typography>
                        <Typography>John Doe (Managing Director)</Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="h6">Register Information:</Typography>
                        <Typography>
                            <strong>Commercial Register: </strong>Register Court Sample City
                            <br />
                            <strong>Registration Number: </strong>HRB 12345
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="h6">VAT ID:</Typography>
                        <Typography>
                            <strong>VAT Identification Number: </strong>DE123456789
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="h6">Dispute Resolution:</Typography>
                        <Typography>
                            The European Commission provides a platform for online dispute resolution (ODR):
                            <Link href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
                                https://ec.europa.eu/consumers/odr
                            </Link>
                            .<br />
                            We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="h6">Disclaimer</Typography>
                        <Typography>
                            <strong>Liability for content: </strong> As a service provider, we are responsible for our own content on these pages in accordance
                            with general laws. However, we are not obliged to monitor transmitted or stored third-party information or to investigate
                            circumstances that indicate illegal activity. Obligations to remove or block the use of information according to general laws remain
                            unaffected.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Impressum;

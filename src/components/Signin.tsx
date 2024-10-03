import { useState } from "react";
import { Box, Button, Container, CssBaseline,TextField, Typography } from "@mui/material";
import {useNavigate } from "react-router-dom";
import axios from "axios";



const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [valid, setValid] = useState(true);

    const navigate = useNavigate();

    const handleLogin = () => {
        axios.get(`http://localhost:4000/login`, {
            params: {
                email: email,
                password: password
            }
        })
            .then(res => res.data)
            .then(data => {
                console.log("test")
                navigate('/main', { state: data })
            })
            .catch(function (error) {
                alert(error);
                setValid(false);
            });
    };

    return (
        <Box
            sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: '#FAFAFA',
            }}
        >
            <Container
                maxWidth="xs"
                sx={{
                    background: '#FAFAFA',
                    borderRadius: '8px',
                    padding: '20px',
                    boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.1)',
                }}
            >
                <CssBaseline />
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Typography variant="h3">Sign In</Typography>
                    <Typography>Log in by entering your email address or username and password</Typography>
                    <Box sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="user"
                            label="Email Address"
                            name="email"
                            autoFocus
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <Button
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, background: '#f6bf19' }}
                            onClick={handleLogin}
                        >
                            Login
                        </Button>
                        {!valid && (
                            <Typography color="error">Wrong email or password</Typography>
                        )}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Signin;

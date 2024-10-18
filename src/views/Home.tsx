import {Box, Stack, Typography} from "@mui/material";
import {useState} from "react";
import FestlCardMd from "../components/FestlCardMd.tsx";

const Home = () => {
    const [festls] = useState<number[]>([1, 1, 1, 1,1]);
    return (
        <Box padding={4}>
            <Typography
                variant="h2"
                sx={{
                    flexGrow: 1,
                    marginBottom: 5,
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 'bold',
                    letterSpacing: 1.5,
                    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        transform: 'scale(1.02)',
                    }
                }}
            >
                Buffet HTBLA Kaindorf
            </Typography>

            <Stack direction="row" justifyContent="start" gap={2}>
                {festls.map(value => (
                    <FestlCardMd key={value} />
                ))}
            </Stack>
        </Box>
    );
};

export default Home;
import React, { useState, useEffect } from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, IconButton, Stack, Typography } from "@mui/material";
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import GroupsIcon from '@mui/icons-material/Groups';
import InfoIcon from '@mui/icons-material/Info';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EuroIcon from '@mui/icons-material/Euro';

const FestlCardMd = () => {

    const [isLiked, setIsLiked] = useState<boolean>(true);

    const [rotationAngle, setRotationAngle] = useState(0);
    useEffect(() => {
        const randomAngle = Math.random() * (5 + 5) -5 ;
        setRotationAngle(randomAngle);
    }, []);

    const toggleLike = () => {
        setIsLiked((prev) => !prev);
    };

    return (
        <Card
            sx={{
                transition: 'transform 0.4s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                    transform: `rotate(${rotationAngle}deg) scale(1.05)`,
                    boxShadow: '0 12px 20px rgba(0, 0, 0, 0.2)',
                },
                borderRadius: 2,
                boxShadow: '0 6px 10px rgba(0, 0, 0, 0.1)',
                overflow: 'hidden',
                maxWidth: 345,
                minWidth:250,
                margin: 2,
                textAlign: 'left'
            }}
        >
            <CardMedia
                sx={{
                    height: 180,
                    width: '100%',
                    transition: 'opacity 0.3s',
                    '&:hover': {
                        opacity: 0.9
                    }
                }}
                image="/schnitzlsemmel.jpg"
                title="Schnitzlsemmel bild"
            />
            <CardContent sx={{ paddingBottom: 1 }}>
                <Typography gutterBottom variant="h5" component="div" sx={{ color: 'primary.main', textAlign: 'left' }}>
                    Schnizelsemmel
                </Typography>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ marginBottom: 1, textAlign: 'left' }}>
                    <InfoIcon sx={{ color: 'secondary.main' }} />
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        AKTION!
                    </Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ textAlign: 'left' }}>
                    <EuroIcon sx={{ color: 'secondary.main' }} />
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        3.50 €
                    </Typography>
                </Stack>
            </CardContent>
            <CardActions sx={{ justifyContent: 'flex-start', padding: 2 }}> {/* Align buttons to the left */}
                <Button size="small" variant="outlined" color="primary">
                    Share
                </Button>
                <Button size="small" variant="contained" color="primary">
                    Visit
                </Button>
                <IconButton onClick={toggleLike} sx={{ color: isLiked ? 'red' : 'default' }}>
                    {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default FestlCardMd;

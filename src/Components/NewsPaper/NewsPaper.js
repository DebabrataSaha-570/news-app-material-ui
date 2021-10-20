import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';

const NewsPaper = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-09-20&sortBy=publishedAt&apiKey=748359b350c343ea88a72163afcc7fe8')
            .then(res => res.json())
            .then(data => setArticles(data.articles))
    }, [])
    console.log(articles)
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    <Grid item xs={2} sm={4} md={4} >

                    </Grid>
                }
            </Grid>
        </Box>
    );
};

export default NewsPaper;
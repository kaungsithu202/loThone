import React from 'react';
// mui
import { Container, Grid, Paper } from '@mui/material';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

type Props = {};
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#eeeeee',
  padding: 60,
  textAlign: 'center',
  color: '#1e1e1e',
  cursor: 'pointer',
}));

const Index = () => {
  const router = useRouter();
  const handlePxToRemConverter = () => {
    router.push({
      pathname: '/pxToRem',
    });
  };

  return (
    <div>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item md={3} onClick={handlePxToRemConverter}>
            <Item>Px To Rem Converter </Item>
          </Grid>
          <Grid item md={3}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item md={3}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item md={3}>
            <Item>xs=4</Item>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Index;

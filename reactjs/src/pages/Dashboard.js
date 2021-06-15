// This page is for "Dashboard" page. Any components in this page should be imported here.
import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import Leaderboard from 'src/components/dashboard/Leaderboard';
import LatestAlgorithm from 'src/components/dashboard/LatestAlgorithm';
import Graphs from 'src/components/dashboard/Graphs';

const Dashboard = () => (
  <>
    <Helmet>
      <title>Dashboard | Place Recognition Challenge</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <Graphs />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <LatestAlgorithm sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <Leaderboard />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Dashboard;

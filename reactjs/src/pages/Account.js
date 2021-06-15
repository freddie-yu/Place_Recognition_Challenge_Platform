// This page is for User Account page. Any components in this page should be imported here.
import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import AccountProfile from 'src/components/account/AccountProfile';

const Account = () => (
  <>
    <Helmet>
      <title>Account |  Place Recognition Challenge</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            <AccountProfile />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Account;

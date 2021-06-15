// This page is for "Change detail" page. Any components in this page should be imported here.
import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import ChangeDetails from 'src/components/account/ChangeDetails';

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
            lg={8}
            md={6}
            xs={12}
          >
            <ChangeDetails />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Account;

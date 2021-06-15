// This page is "make submission" page.
import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@material-ui/core';

const AccountProfileDetails = (props) => {
  const [values, setValues] = useState({
    algorithmName: '',
    algorithmDescription: '',
    projectURL: '',
    publicationURL: '',
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Make Submisson"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                label="Algorithm Name"
                name="algorithmName"
                onChange={handleChange}
                required
                value={values.algorithmName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                label="Algorithm Description(optional)"
                name="algorithmDescription"
                onChange={handleChange}
                value={values.lastName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                label="Project URL(optional)"
                name="projectURL"
                onChange={handleChange}
                // type="number"
                value={values.projectURL}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                label="Publication URL(optional)"
                name="publicationURL"
                onChange={handleChange}
                // type="number"
                value={values.publicationURL}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <Button
                variant="contained"
                component="label"
              >
                Upload File
                <input
                  type="file"
                  hidden
                />
              </Button>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            variant="contained"
            component="label"
          >
            Submit
            <input
              type="file"
              hidden
            />
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default AccountProfileDetails;

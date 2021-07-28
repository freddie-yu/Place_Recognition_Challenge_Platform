// This page is "make submission" page.
import { useState } from 'react';
import axios from 'axios';
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
    file: null
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleFileChange = (event) => {
    setValues({
      ...values,
      file: event.target.files[0]
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values, setValues);
    const formData = new FormData();
    formData.append('file', values.file, values.file.name);
    formData.append('title', values.algorithmName);
    formData.append('content', values.algorithmDescription);
    const url = 'http://localhost:8000/api/myapi/';
    axios.post(url, formData, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card>
        <CardHeader
          subheader="Please complete required fields"
          title="Make Submission"
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
                label="Algorithm Description"
                name="algorithmDescription"
                onChange={handleChange}
                value={values.algorithmDescription}
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
                  name="file"
                  accept="file/txt"
                  onChange={handleFileChange}
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
              type="submit"
              hidden
            />
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default AccountProfileDetails;

/*
import React, { Component } from 'react';
import axios from 'axios';

class MakeSubmission extends Component {
  state = {
    title: '',
    content: '',
    file: null
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleFileChange = (e) => {
    this.setState({
      file: e.target.files[0]
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    const formData = new FormData();
    formData.append('file', this.state.file, this.state.file.name);
    formData.append('title', this.state.title);
    formData.append('content', this.state.content);
    let url = 'http://localhost:8000/api/myapi/';
    axios.post(url, formData, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => console.log(err))
  };

  render() {
    return (
      <div className="MakeSubmission">
        <form onSubmit={this.handleSubmit}>
          <p>
            <input type="text" placeholder='Title' id='title' value={this.state.title} onChange={this.handleChange} required/>
          </p>
          <p>
            <input type="text" placeholder='Content' id='content' value={this.state.content} onChange={this.handleChange} required/>

          </p>
          <p>
            <input type="file"
                   id="file"
                   accept="file/txt"  onChange={this.handleFileChange} required/>
          </p>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default MakeSubmission;
*/

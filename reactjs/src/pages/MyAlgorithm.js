// This page is for "My Submission" page. Any components in this page should be imported here.
import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid,
  Pagination
} from '@material-ui/core';
import MyAlgorithm from 'src/components/myAlgorithm/algorithms';
import Pro from 'src/components/myAlgorithm/MyAlgorithmDetail';
import products from 'src/participant/products';

const ProductList = () => (
  <>
    <Helmet>
      <title>Products | Place Recognition Challenge</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <MyAlgorithm />
        <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
            {products.map((product) => (
              <Grid
                item
                key={product.id}
                lg={4}
                md={6}
                xs={12}
              >
                <Pro product={product} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 3
          }}
        >
          <Pagination
            color="primary"
            count={3}
            size="small"
          />
        </Box>
      </Container>
    </Box>
  </>
);

export default ProductList;

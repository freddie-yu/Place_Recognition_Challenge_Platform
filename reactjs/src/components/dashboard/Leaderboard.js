// import moment from 'moment';
// import { v4 as uuid } from 'uuid';
// import PerfectScrollbar from 'react-perfect-scrollbar';
/*
import {
  Box,
  Button,
  Card,
  CardHeader,
  // Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import axios from 'axios';
 */
import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class Leaderboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  async componentDidMount() {
    const res = await fetch('http://localhost:8000/api/myapi/');
    const items = await res.json();
    this.setState({
      items
    });
  }

  render() {
    const { items } = this.state;
    const columns = [{
      Header: 'Rank',
    }, {
      Header: 'Name',
      accessor: 'name',
    }, {
      Header: 'Algorithm Name',
      accessor: 'algorithm_name',
    }, {
      Header: 'Date',
      accessor: 'create_date',
    }, {
      Header: 'Accuracy',
      accessor: 'accuracy',
    }, {
      Header: 'Execution Time',
      accessor: 'execution_time',
    }, {
      Header: 'Memory Consumption',
      accessor: 'memory_consumption',
    },
    ];
    return (
      <ReactTable
        data={items}
        columns={columns}
      />
    );
  }
}
/*
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json
        });
      });
  }
  */

/*
  render() {
    const { items } = this.state;
    return (
      <div className="App">
        <ul>
          {items.map((item) => (
            <li key={item.docker_id}>
              User Name:
              {item.name}
              | Algorithms Name:
              {item.algorithms_name}
              | Date:
              {item.create_date}
              | Accuracy:
              {item.accuracy}
              | Execution Time:
              {item.execution_time}
              | Memory Consumption:
              {' '}
              {item.memory_consumption}
            </li>
          ))}
        </ul>
        <Leaderboard />
      </div>
    );
  }
}

const orders = [
  {
    // id: uuid(),
    rank: '1',
    customer: {
      name: 'user1'
    },
    algorithms: {
      name: 'Dropbox'
    },
    // createdAt: ,
    accuracy: '90%',
    excutionTime: '99',
    memoryConsumption: '32'
  },
  {
    // id: uuid(),
    rank: '2',
    customer: {
      name: 'user2'
    },
    algorithms: {
      name: 'Medium Corporation'
    },
    // createdAt: ,
    accuracy: '80%',
    excutionTime: '98',
    memoryConsumption: '64'
  },
  {
    // id: uuid(),
    rank: '3',
    customer: {
      name: 'user3'
    },
    algorithms: {
      name: 'Slack'
    },
    // createdAt: ,
    accuracy: '70%',
    excutionTime: '97',
    memoryConsumption: '128'
  },
  {
    // id: uuid(),
    rank: '4',
    customer: {
      name: 'user4'
    },
    algorithms: {
      name: 'Lyft'
    },
    // createdAt: ,
    accuracy: '60%',
    excutionTime: '96',
    memoryConsumption: '256'
  },
  {
    // id: uuid(),
    rank: '5',
    customer: {
      name: 'user5'
    },
    algorithms: {
      name: 'GitHub'
    },
    // createdAt: ,
    accuracy: '50%',
    excutionTime: '95',
    memoryConsumption: '512'
  },
  {
    // id: uuid(),
    rank: '6',
    customer: {
      name: 'user6'
    },
    algorithms: {
      name: 'Google'
    },
    // createdAt: ,
    accuracy: '40%',
    excutionTime: '94',
    memoryConsumption: '1024'
  },
  {
    // id: uuid(),
    rank: '7',
    customer: {
      name: 'user7'
    },
    algorithms: {
      name: 'Baidu'
    },
    // createdAt: ,
    accuracy: '30%',
    excutionTime: '93',
    memoryConsumption: '2344'
  },
  {
    // id: uuid(),
    rank: '8',
    customer: {
      name: 'user8'
    },
    algorithms: {
      name: 'Amazon'
    },
    // createdAt: ,
    accuracy: '20%',
    excutionTime: '92',
    memoryConsumption: '7656'
  },
  {
    // id: uuid(),
    rank: '9',
    customer: {
      name: 'user9'
    },
    algorithms: {
      name: 'Ali'
    },
    // createdAt: ,
    accuracy: '10%',
    excutionTime: '91',
    memoryConsumption: '2342'
  },
  {
    // id: uuid(),
    rank: '10',
    customer: {
      name: 'user10'
    },
    algorithms: {
      name: 'Tengxun'
    },
    // createdAt: ,
    accuracy: '5%',
    excutionTime: '90',
    memoryConsumption: '2342'
  }
];

const Leaderboard = (props) => (
  <Card {...props}>
    <CardHeader title="Top Algorithms leaderboard" />
    <Divider />
    <PerfectScrollbar>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Rank</TableCell>
              <TableCell>User Name</TableCell>
              <TableCell>Algorithms Name</TableCell>
              <TableCell sortDirection="desc">
                <Tooltip enterDelay={300} title="Sort">
                  <TableSortLabel active direction="desc">
                    Date
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
              <TableCell>Accuracy</TableCell>
              <TableCell>Execution Time</TableCell>
              <TableCell>Memory Consumption</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow hover key={order.id}>
                <TableCell>{order.rank}</TableCell>
                <TableCell>{order.customer.name}</TableCell>
                <TableCell>{order.algorithms.name}</TableCell>
                <TableCell>
                  {moment(order.createdAt).format('DD/MM/YYYY')}
                </TableCell>
                <TableCell>{order.accuracy}</TableCell>
                <TableCell>{order.executionTime}</TableCell>
                <TableCell>{order.memoryConsumption}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </PerfectScrollbar>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon />}
        size="small"
        variant="text"
      >
        View all
      </Button>
    </Box>
  </Card>
);
*/
export default Leaderboard;

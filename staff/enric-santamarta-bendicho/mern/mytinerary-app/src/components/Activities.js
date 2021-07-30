import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button';
import Home from './images/homeIcon.png'
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    activities: state.activities.activities,
    error: state.activities.error
})

class Activities extends Component {
    constructor(){
        super()
        this.state ={
        }
    }

    render(){

        const { props: { activities } } = this

        const activitiesRender = activities.map((activity, index) => <TableRow key={index}><TableCell key={index}>{activity.activity}<img style={{ width: 200, height: 100 }} alt="activity itineraries" src={activity.image} /></TableCell></TableRow>)

        return <div><h2>Activities</h2>
            <Box>
                <TableContainer component={Paper} size="small">
                    <Table size="small">
                        <TableBody>
                            {activitiesRender}
                        </TableBody>
                    </Table>
                </TableContainer>
                <footer>
                    <NavLink to='/' ><Button><img src={Home} alt="return home" /> </Button></NavLink>
                </footer>
            </Box>
        </div>
    }
}


export default connect(mapStateToProps) (Activities)
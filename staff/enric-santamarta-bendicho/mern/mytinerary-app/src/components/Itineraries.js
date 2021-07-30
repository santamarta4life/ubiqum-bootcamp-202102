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
import { retrieveActivities } from '../store/actions/activitiesActions'



const mapStateToProps = (state) => ({
    itineraries: state.itineraries.itineraries,
    error: state.itineraries.error
})

const mapDispatchToProps = (dispatch) => {
    return {
        retrieveActivities: itinerary => dispatch(retrieveActivities(itinerary))
    }
}



class Itineraries extends Component {
    constructor() {
        super()
        this.state = {
        }
    }

    handleClickActivities = (event) => {
        const itinerary = event.target.value

        this.props.retrieveActivities(itinerary)
    }

    render() {

        const { props: { itineraries } } = this

        //   const itinerariesName = itineraries[0].city

        const itinerariesRender = itineraries.map((itinerary, index) => <TableRow key={index}><TableCell key={index}>{itinerary.title}{itinerary.duration}{itinerary.rating}<img style={{ width: 200, height: 100 }} alt="city itineraries" src={itinerary.profilePicture} /> <NavLink to='/Activities' ><button onClick={this.handleClickActivities} value={itinerary.title}>Activities </button></NavLink></TableCell></TableRow>)

        return <div><h2>Itineraries in </h2>
            <Box>
                    <TableContainer component={Paper} size="small">
                        <Table size="small">
                            <TableBody>
                                {itinerariesRender}
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

export default connect(mapStateToProps, mapDispatchToProps)(Itineraries)
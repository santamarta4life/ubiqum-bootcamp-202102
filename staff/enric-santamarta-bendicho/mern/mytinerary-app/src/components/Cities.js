import React, { Component } from 'react';
import './Cities.css'
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
import { NavLink } from 'react-router-dom'
import FilterCities from './FilterCities';
import { connect } from 'react-redux';
import { handleFilterCities, retrieveCities } from '../store/actions/cityActions';

const mapStateToProps = (state) => ({
    filteredCities: state.cities.filteredCities,
    cities: state.cities.cities,
    error: state.cities.error
})

const mapDispatchToProps = (dispatch) => {
    return {
        retrieveCities: () => dispatch(retrieveCities()),
        handleFilterCities: filter => dispatch(handleFilterCities(filter))
    }
}


class Cities extends Component {
    constructor() {
        super()
        this.state = {
            isFetching: false,
            citiesFilter: ""
        }
    }

    componentDidMount() {
        this.props.retrieveCities()
    }

    handleFilter = (filter) => {
        this.props.handleFilterCities(filter)  
    }

    render() {
        const { props: { cities, filteredCities }, state: { isFetching } } = this

        const _cities = filteredCities && filteredCities.length? filteredCities : cities

        const cityNames = _cities.map((city, index) => <ul key={index}> {city.name} </ul>)

        const cityCountries = _cities.map((city, index) => <ul key={index}> {city.country} </ul>)

        //const listCitiesImage = cities.map((cities,index) => <ul key={index}><mg src={cities.img}> </ul>)

        return <div><h2>City List</h2>
            <Box>
                <p>Search a city name:</p>
                <FilterCities onChange={this.handleFilter} />
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow><TableCell align="center">City</TableCell><TableCell align="center">Country</TableCell></TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow><TableCell align="center">{cityNames}</TableCell><TableCell align="center">{cityCountries}</TableCell></TableRow>
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

export default connect(mapStateToProps, mapDispatchToProps)(Cities)


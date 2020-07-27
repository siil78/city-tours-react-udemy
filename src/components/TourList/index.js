import React, { Component } from 'react'
//alternativní způsob importu pomocí package.json
//v adresáři Tour jsme definofali hlavní export v package.json pomocí "main"
//pro import stačí zadat jen cestu k adresáři
import Tour from '../Tour'
import './tourlist.scss'
import {tourData} from '../../tourData'

export class TourList extends Component {

    state = {
        tours: tourData
    }

    removeTour = (id) => {
        const {tours} = this.state
        const sortedTours = tours.filter(tour => tour.id !== id)
        this.setState({
            tours: sortedTours
        })
    }

    render() {
        //console.log(this.state.tours);
        const{tours} = this.state

        return (
            <section className="tourlist">
                {
                    tours.map(tour => (
                        <Tour 
                            key={tour.id} 
                            tour={tour} 
                            removeTour={this.removeTour}
                        />
                    ))
                }
            </section>
        )
    }
}

export default TourList

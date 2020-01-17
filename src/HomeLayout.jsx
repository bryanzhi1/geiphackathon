import React from 'react'
import NavBar from './components/navbar'
import DatePicker from 'react-datepicker'

class HomeLayout extends React.Component {
    constructor(props) {
        super(props)
        this.state = { date : new Date() }
    }

    render() {
        return(
            <div>
                <NavBar />
                <div>
                    <h4>Find a Trip</h4>
                    <input id="country" type="text" />
                    <label htmlFor="country">Country: </label>
                    <h5>When are you leaving?</h5>
                    <DatePicker
                        selected={ this.state.date }
                    >
                    </DatePicker>
                    <button type="button" />
                </div>
            </div>
        )
    }
}

export default HomeLayout;
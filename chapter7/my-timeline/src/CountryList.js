import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

class CountryList extends Component{
    constructor(){
        super();
        this.state = {
            countryName: [],
            loading:false,
        }
    }

    componentDidMount(){
     this.setState({loading: true});
     fetch('https://restcountries.eu/rest/v1/all')
        .then(response => response.json())
        .then(json => json.map(country => country.name))
        .then(countryName => 
            this.setState({countryName , loading:false})
        )
    }

    render(){
        const {countryName, loading} = this.state;
        return (loading) ?
            <div>나라 이름 로딩중입니다.</div> : 
            (!countryName.length) ?
            <div>나라 이름이 없습니다. </div> :
            <ul>
                {
                    countryName.map( (country, i) => 
                        <li key={i}>{country}</li>
                    )
                }
            </ul>
    }


}
import React from "react";


export default class AirportSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      airports: [],
      selectedAirport: "",
      cursor: null
    };
  }

  // Update the search query on key and then make api request for airports
  update(property) {
    return e => {
      this.setState({ [property]: e.target.value, airports: [] }, this.searchAirports);
    };
  }

// Search airports using query from current state
  searchAirports(){
    if (this.state.query.length > 0){
    let airports = $.ajax({
        method: 'GET',
        url: `/api/airports`,
        data: {query: `${this.state.query.toLowerCase()}`}
      })
      .done((response) => {
        this.setState( {airports: response});})
      .fail((xhr) => {
      });
    }
  }

// Select airport and update state of airport distanct-calculator component
  selectAirport(airport) {
    this.setState({
      query: airport.name + ", "+ airport.state_abv + " (" + airport.code + ")",
      selectedAirport : airport,
      airports: []}, this.props.updateAirport(this.props.type, airport));
  }

// Navigate through the search suggestions using the arrow keys
  handleKeyPress(e){
    if(!this.refs[0]){
      return;
    }else if (this.state.cursor === null && e.key === "ArrowDown"){
        this.setState({cursor: 0}, () =>{
        this.refs[this.state.cursor].focus();
        let airport = this.state.airports[this.state.cursor];
        this.setState({query: airport.name + ", "+ airport.state_abv + " (" + airport.code + ")"});
      });
    } else if (this.state.cursor >= 0 && e.key === "ArrowDown"){
      this.setState({cursor: this.state.cursor + 1}, () =>{
        this.refs[this.state.cursor].focus();
        let airport = this.state.airports[this.state.cursor];
        this.setState({query: airport.name + ", "+ airport.state_abv + " (" + airport.code + ")"});
      });
    } else if (this.state.cursor > 0 && e.key === "ArrowUp"){
      this.setState({cursor: this.state.cursor - 1}, () =>{
        this.refs[this.state.cursor].focus();
        let airport = this.state.airports[this.state.cursor];
        this.setState({query: airport.name + ", "+ airport.state_abv + " (" + airport.code + ")"});
      });
    } else if (this.state.cursor === 0 && e.key === "ArrowUp"){
      this.setState({cursor: null});
    } else if (this.state.cursor >= 0 && e.key === "Enter"){
      this.selectAirport(this.state.airports[this.state.cursor]);
    } else if (this.state.cursor >= 0 &&
                e.key != "ArrowUp" ||
                e.key != "ArrowDown" ||
                e.key != "Enter") {
      this.setState({cursor: null});
                }
  }

  render(){
    return (
      <div className='airport-search-body'>
          <input
            className="airport-search-bar"
            placeholder={`Search ${this.props.type} Airport...`}
            type="text"
            value={this.state.query}
            onChange={this.update("query")}
            onKeyDown={this.handleKeyPress.bind(this)}/>
            <ul className="airport-result-list"
            id="style-8">
              {this.state.airports.map((airport, index) => {
                return (<li
                            className={`airport-result ${this.state.cursor === index ? 'active' : ''}`}
                            ref={index}
                            key={index}
                            onClick={() => {
                              this.selectAirport(airport);
                            }}>
                          <div className="airport-name">{airport.name} ({airport.code})</div>
                          <div className="airport-location">{airport.city}, {airport.state_abv}</div>
                        </li>);
                 })
                }
            </ul>
        </div>
    );
  }

}

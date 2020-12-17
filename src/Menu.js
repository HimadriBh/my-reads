import React from 'react';
import Select from 'react-select';

    const options = [
      {label: "Currently Reading", value: "currentlyReading"},
      {label:  "Want to Read", value: "wantToRead"},
      {label: "Read", value: "read"},
      {label: "None", value: "none"},
    ]

export default class Menu extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });

    this.props.onSelect(selectedOption);

  };
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}

// import React, { Component } from 'react'
// // import Select from "react-dropdown-select";
// import { Dropdown } from 'react-bootstrap';

// export default class Menu extends Component {
//   handleChange = (e) => {
//     e.preventDefault()
//     console.log(e)
//   }
//   render() {

//     // const options = optionsObj.map(elem => (
//     //   <option value={elem.value}>{elem.text}</option>
//     // ));
//     return (
//       <div className="book-shelf-changer">
//         {/* <select onChange={this.handleChange} clearOnSelect >
//           {options}
//         </select> */}
//         <Dropdown>
//           <Dropdown.Toggle variant="success" id="dropdown-basic">
//           </Dropdown.Toggle>

//           <Dropdown.Menu onSelect={this.handleChange}>
//             <Dropdown.Item >Action</Dropdown.Item>
//             <Dropdown.Item >Another action</Dropdown.Item>
//             <Dropdown.Item >Something else</Dropdown.Item>
//           </Dropdown.Menu>
//         </Dropdown>
//       </div>
//     )
//   }
// }

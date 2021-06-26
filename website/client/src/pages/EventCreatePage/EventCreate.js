import React from "react";
import EventsMembersHeader from "../../components/EventsMembersHeader/EventsMembersHeader";
import Navbar from "../../components/Navbar/Navbar";
import LoggedHeader from "../../components/LoggedHeader/LoggedHeader";
import { withRouter} from 'react-router-dom';

class EventCreate extends React.Component {
  state={
    eventDescription:"",
    eventSummary:"blah meh meh",
    eventName:"",
    eventDate:"",
    eventTime:"13:55:55",
    eventSeatingCapacity:0,
    eventVenue:"",
    registrationLink:"",
    is_referral:false,
    contactName1:null,
    contactName2:null,
    contactNumber1:null,
    contactNumber2:null,

  }
  onChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  EventPost=(e)=>{
    e.preventDefault();
    var token = localStorage.getItem("Token");
    var committee_id = parseInt(localStorage.getItem("id"))
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Token "+token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"eventDescription":this.state.eventDescription,
    "eventSummary":this.state.eventSummary,
    "eventName":this.state.eventName,
    "eventDate":this.state.eventDate,
    "eventTime":this.state.eventTime,
    "eventSeatingCapacity":this.state.eventSeatingCapacity,
    "eventVenue":this.state.eventVenue,
    "registrationLink":this.state.registrationLink,
    "is_referral":this.state.is_referral,
    "organisingCommittee":committee_id,
    "contactName1":this.state.contactName1,
    "contactName2":this.state.contactName2,
    "contactNumber1":this.state.contactNumber1,
    "contactNumber2":this.state.contactNumber2});

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://aryan123456.pythonanywhere.com/api/events/new/", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

    this.props.history.push('/events');
  }
  render() {
    return (
      <div style={{ background: "#1C2E4A" }}>
        <Navbar />
        <LoggedHeader />
        <EventsMembersHeader />
        <form onSubmit={this.EventPost} action="">
        <div
          className="container"
          style={{
            color: "white",
            padding: "30px",
            background: "#4E586E",
            display: "flex",
            borderRadius: "28.39px",
            boxShadow: "3px 3px black",
          }}
        >
          <div className="col-sm-4">
            <h3 style={{ textAlign: "left" }}>Name of the event:</h3>
            <input
              onChange={this.onChange}
              name="eventName"
              className="eventinput"
              style={{ width: "100%", padding: "5px" }}
              type="text"
              placeholder="Enter the name of the event"
            ></input>
            <br></br>
            <br></br>
            <h3 style={{ textAlign: "left" }}>Short Description:</h3>
            <textarea
              onChange={this.onChange}
              name="eventDescription"
              className="eventinput"
              style={{ width: "100%", padding: "5px", height: "100px" }}
              type="text"
              placeholder="Enter a short description of the event"
            ></textarea>
            <br></br>
            <br></br>
            <h3 style={{ textAlign: "left" }}>Date of the event:</h3>
            <input
              onChange={this.onChange}
              name="eventDate"
              className="eventinput"
              style={{ width: "100%", padding: "5px" }}
              type="date"
              placeholder="Choose a Date"
            ></input>
            <br></br>
            <br></br>
            <h3 style={{ textAlign: "left" }}>Venue of the event:</h3>
            <input
              onChange={this.onChange}
              name="eventVenue"
              className="eventinput"
              style={{ width: "100%", padding: "5px", fill: "#fff" }}
              type="text"
              placeholder="Enter the venue of the event"
            ></input>
            <br></br>
            <br></br>
          </div>
          <div className="col-sm-4">
            <h3 style={{ textAlign: "left" }}>Link to Register:</h3>
            <input
              onChange={this.onChange}
              name="registrationLink"
              className="eventinput"
              style={{ width: "100%", padding: "5px" }}
              type="text"
              placeholder="Paste the link to register"
            ></input>
            <br></br>
            <br></br>
            <h3 style={{ textAlign: "left" }}>Contact Details:</h3>
            <div style={{ width: "100%", display: "flex" }}>
              <input
                onChange={this.onChange}
                name="contactName1"
                className="eventinput"
                style={{ width: "60%", padding: "5px" }}
                type="text"
                placeholder="Person's Name"
              ></input>
              &nbsp;
              <input
                onChange={this.onChange}
                name="contactNumber1"
                className="eventinput"
                style={{ width: "100%", padding: "5px" }}
                type="text"
                placeholder="Contact Number"
              ></input>
            </div>
            <br></br>
            <div style={{ width: "100%", display: "flex" }}>
              <input
                onChange={this.onChange}
                name="contactName2"
                className="eventinput"
                style={{ width: "60%", padding: "5px" }}
                type="text"
                placeholder="Person's Name"
              ></input>
              &nbsp;
              <input
                onChange={this.onChange}
                name="contactNumber2"
                className="eventinput"
                style={{ width: "100%", padding: "5px" }}
                type="text"
                placeholder="Contact Number"
              ></input>
            </div>
            <br></br>
            <h3 style={{ textAlign: "left" }}>Upload Poster:</h3>
            <input
              className="eventinput"
              accept="image/*"
              type="file"
              style={{
                width: "100%",
                padding: "5px",
                border: "1px solid black",
              }}
            />
            <br></br>
            <br></br>
            <div style={{ display: "flex", width: "100%" }}>
              <h3 style={{ textAlign: "left" }}>Add Referral?</h3>
              <input
                className="eventinput"
                style={{ width: "35px", height: "35px", textAlign: "right" }}
                type="checkbox"
              ></input>
            </div>
            <button
              style={{
                width: "100%",
                height: "38px",
                color: "white",
                background:
                  "linear-gradient(62.97deg, #F54B64 29.17%, #F78361 100%)",
                borderRadius: "9.51273px",
              }}
              type="submit"
            >
              Create the Event
            </button>
            <br></br>
            <br></br>
          </div>
          <div className="col-sm-4">
            <h3 style={{ textAlign: "left" }}>Preview of the poster:</h3>
            <img width="100%" />
            <br></br>
            <br></br>
          </div>
        </div>
        </form>
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default withRouter(EventCreate);
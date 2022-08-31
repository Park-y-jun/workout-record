import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick

export default class Calandar extends React.Component {
  render() {
    return (
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        navLinks={true}
        navLinkDayClick={this.handleNavLinkDayClick}
        //  dateClick={this.handleDateClick}
      />
    );
  }

  /* handleDateClick = (arg) => {
    // bind with an arrow function
    alert("bangap gookjoo");
    
  }; */

  handleNavLinkDayClick = () => {
    alert("icy");
    window.open("/record", "my win", "width=400,height=500");
  };
}

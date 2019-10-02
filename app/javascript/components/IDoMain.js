import React from "react"
import PropTypes from "prop-types"
class IDoMain extends React.Component {
  render () {
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
      </React.Fragment>
    );
  }
}

IDoMain.propTypes = {
  greeting: PropTypes.string
};
export default IDoMain

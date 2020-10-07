import React from "react";

export default function withToggle(BaseComponent) {
  return class withToggleWrapper extends React.Component {
    state = {
      isToggled: false,
    };

    handleToggle = e => this.setState({isToggled: !this.state.isToggled});

    render() {
      return (
        <BaseComponent
          {...this.props}
          {...this.state}
          handleToggle={this.handleToggle}
        />
      );
    }
  };
}

import React from 'react';

export const LoggerContext = React.createContext({
  logs: [],
  info: () => {},
  warn: () => {},
});

export default class Logger extends React.Component {
  constructor(props) {
    super(props);

    this.info = (message) => {
      this.setState(state => ({
        logs: state.logs.concat('Info: ' + message),
      }))
    };
    this.warn = (message) => {
      this.setState(state => ({
        logs: state.logs.concat('Warn: ' + message),
      }))
    };
    this.state = {
      logs: [],
      info: this.info,
      warn: this.warn,
    }
  }

  render() {
    return (
      <LoggerContext.Provider value={this.state}>
        {this.props.children}
      </LoggerContext.Provider>
    );
  }
}

export function withLogger(Component) {
  return function LoggedComponent(props) {
    return (
      <LoggerContext.Consumer>
        {(context) =>
          <Component {...props} {...context}/>}
      </LoggerContext.Consumer>
    );
  }
}
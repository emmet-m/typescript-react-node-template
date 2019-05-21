import * as React from "react";

export interface IAppRootProps {
  compiler: string;
  framework: string;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class AppRoot extends React.Component<IAppRootProps, {}> {
  render() {
    return <h1>Hi from {this.props.compiler} and {this.props.framework}!</h1>;
  }
}
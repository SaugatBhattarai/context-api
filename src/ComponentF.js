import React, { Component } from "react";
import { UserConsumer } from "./userContext";
export default class ComponentF extends Component {
  render() {
    return (
      <div>
        {/* component where the desired value is required */}
        <UserConsumer>
          {username => {
            return <h1>Hello {username} from context API.</h1>;
          }}
        </UserConsumer>
      </div>
    );
  }
}

import React, { Component } from "react";
import ComponentC from "./ComponentC";
import { UserProvider } from "./userContext";
// https://www.youtube.com/watch?v=lTjQjWemKgE
export default class App extends Component {
  render() {
    return (
      <div className="App">
        {/* At the top level include the provider component and provide the value 
        using value attribute. This value can be used at any of the descendent Components.
        */}
        <UserProvider value="Saugat Bhattarai">
          <ComponentC />
        </UserProvider>
      </div>
    );
  }
}

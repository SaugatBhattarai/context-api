import React from "react";

//UserContext object comes with provider and consumer react component
//Handle UserContext.provider
const UserContext = React.createContext();

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };

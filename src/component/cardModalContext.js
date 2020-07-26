import React from "react";

const CardModalContext = React.createContext();

const CardModalProvider = CardModalContext.Provider;
const CardModalConsumer = CardModalContext.Consumer;

export { CardModalProvider, CardModalConsumer };
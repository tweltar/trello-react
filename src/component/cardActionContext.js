import React from 'react';

const CardActionContext = React.createContext();

const CardActionProvider = CardActionContext.Provider;
const CardActionConsumer = CardActionContext.Consumer;

export { CardActionConsumer, CardActionProvider };
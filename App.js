import React, { useState } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import YourComponent from './YourComponent.js'; // Import your component

const fetchFonts = () => {
  return Font.loadAsync({
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    // Add other styles or weights if needed
  });
};

const App = () => {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(error) => console.error(error)}
      />
    );
  }

  return (
    <YourComponent />
    // Add other components or screens here
  );
};

export default App;

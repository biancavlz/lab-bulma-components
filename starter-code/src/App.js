import React from 'react';
import Navbar from './Navbar'
import FormField from './FormField'


class App extends React.Component {
  render(){
    const element = (
      <div>
        <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      </div>
    );
    return element
  }
}

export default App;
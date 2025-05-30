import React, { useState } from 'react';
import Dialog from './components/Dialog/Dialog';
import Button from './components/Dialog/Button/Button';
import './App.css';

const App = () => {
  const [dialog1Open, setDialog1Open] = useState(false);
  const [dialog2Open, setDialog2Open] = useState(false);
  const [dialog3Open, setDialog3Open] = useState(false);

  return (
    <div className="app">
      <h1>Dialog Window Demo</h1>
      
      <div>
        <Button onClick={() => setDialog1Open(true)}>
          Open Basic Dialog
        </Button>
        
        <Button onClick={() => setDialog2Open(true)}>
          Open Dialog with Footer Info
        </Button>
        
        <Button onClick={() => setDialog3Open(true)}>
          Open Complex Dialog
        </Button>
      </div>

      {/* Basic Dialog */}
      <Dialog
        isOpen={dialog1Open}
        onClose={() => setDialog1Open(false)}
        header={{
          title: "Basic Dialog",
          icon: "ℹ️",
          buttons: [
            <Button key="close" onClick={() => setDialog1Open(false)}>X</Button>
          ]
        }}
        content={<p>This is a basic dialog with minimal elements.</p>}
        footer={{
          buttons: [
            <Button key="ok" onClick={() => setDialog1Open(false)}>OK</Button>
          ]
        }}
      />

      {/* Dialog with Footer Info */}
      <Dialog
        isOpen={dialog2Open}
        onClose={() => setDialog2Open(false)}
        header={{
          title: "Information",
          icon: "ℹ️",
          buttons: [
            <Button key="min" onClick={() => console.log('Minimize')}>_</Button>,
            <Button key="close" onClick={() => setDialog2Open(false)}>X</Button>
          ]
        }}
        content={<p>This dialog has additional information in the footer.</p>}
        footer={{
          info: "Additional information about this dialog",
          buttons: [
            <Button key="cancel" onClick={() => setDialog2Open(false)}>Cancel</Button>,
            <Button key="confirm" onClick={() => setDialog2Open(false)}>Confirm</Button>
          ]
        }}
      />

      {/* Complex Dialog */}
      <Dialog
        isOpen={dialog3Open}
        onClose={() => setDialog3Open(false)}
        header={{
          title: "Complex Dialog",
          icon: "⚠️",
          buttons: [
            <Button key="help" onClick={() => console.log('Help')}>?</Button>,
            <Button key="settings" onClick={() => console.log('Settings')}>!!</Button>,
            <Button key="close" onClick={() => setDialog3Open(false)}>X</Button>
          ]
        }}
        content={
          <div>
            <h3>Important Notice</h3>
            <p>This is a more complex dialog with multiple header buttons and footer options.</p>
            <div className="input-container">
              <input 
                type="text" 
                id="dialog-input" 
                placeholder="Enter something..." 
              />
              <label htmlFor="dialog-input">Your Input</label>
            </div>
          </div>
        }
        footer={{
          info: "Please review your changes before submitting",
          buttons: [
            <Button key="back" onClick={() => console.log('Back')}>Back</Button>,
            <Button key="next" onClick={() => console.log('Next')}>Next</Button>,
            <Button key="skip" onClick={() => setDialog3Open(false)}>Skip</Button>,
            <Button key="submit" onClick={() => setDialog3Open(false)}>Submit</Button>
          ]
        }}
      />
    </div>
  );
};

export default App;
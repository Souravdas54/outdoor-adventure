import './App.css';

import RouterAPP from './Router/router';
import { SnackbarProvider } from 'notistack';

function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <div className="App">

        <RouterAPP />


      </div>
    </SnackbarProvider>
  );
}

export default App;

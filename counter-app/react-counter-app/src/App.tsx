

import { Stack } from "@mui/material";
import { AppHeader } from "./components/AppHeader";
import { AlphaNumericCounter } from "./components/alpha-numeric-counter/AlphaNumericCounter";
import { NumericCounter } from "./components/numeric-counter/NumericCounter";


const App: React.FC = () => {
  return (
      <>      
        <AppHeader />
          <Stack direction='row'>
            <AlphaNumericCounter />
            <NumericCounter />
          </Stack>
        </>
      
  )
}

export default App;

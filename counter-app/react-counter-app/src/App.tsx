import { Box } from "@mui/material";
import { AppHeader } from "./components/AppHeader";
import { AlphaNumericCounter } from "./components/alpha-numeric-counter/AlphaNumericCounter";
import { NumericCounter } from "./components/numeric-counter/NumericCounter";


const App: React.FC = () => {
  return (
      <>      
        <AppHeader />
        <Box display="flex" alignItems="center" justifyContent="center" sx={{m: 5, p: 5}}>
          <AlphaNumericCounter />
          <NumericCounter />
        </Box>
      </>
      
  )
}

export default App;

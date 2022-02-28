import { QueryClient, QueryClientProvider } from "react-query";
import Demo from "./Components/DemoFetch";
import { red } from "@mui/material/colors";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});

const queryClient = new QueryClient({
  // update the default settings if needed
  // defaultOptions: {
  //   queries: {
  //     refetchIntervalInBackground: false,
  //     retry: 1,
  //     refetchOnMount: false,
  //     refetchOnReconnect: false,
  //     refetchOnWindowFocus: false,
  //     retryOnMount: false,
  //   },
  // },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Demo />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;

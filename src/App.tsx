import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Demo from "./Components/DemoFetch";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Demo />
    </QueryClientProvider>
  );
}

export default App;

import Card from "./components/card";
import CountryList from "./components/card/indexc";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        {/* <Card /> */}
        <CountryList />
      </QueryClientProvider>
    </div>
  );
}

export default App;

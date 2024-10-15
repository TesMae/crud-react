import { QueryClient, QueryClientProvider } from "react-query";
import Form from "./components/form/Form";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Form />
    </QueryClientProvider>
  );
}

export default App;

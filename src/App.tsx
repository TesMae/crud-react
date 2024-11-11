import { QueryClient, QueryClientProvider } from "react-query";
import Form from "./components/form/Form";
import Products from "./components/table/Products";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Form />
      <Products />
    </QueryClientProvider>
  );
}

export default App;

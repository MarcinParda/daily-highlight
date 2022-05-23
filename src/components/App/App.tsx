import axios from "axios";
import { useEffect } from "react";
import { useQuery } from "react-query";

export function App() {
  const { data } = useQuery("secret", () =>
    axios.get("https://localhost:5000/secret").then((res) => res.data)
  );

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello Frontend</h1>
    </div>
  );
}

export default App;

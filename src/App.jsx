import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import UserList from "./components/UserList";

function App() {
  const [count, setCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="max-w-4xl-p4">
      <h1 className="text-center text-2xl font-bold my-6">User List</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <UserList searchQuery={searchQuery} />
    </div>
  );
}

export default App;

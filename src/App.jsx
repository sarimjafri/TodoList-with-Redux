import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Todo List</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "2rem auto",
    padding: "1rem",
    backgroundColor: "#121212",
    color: "#fff", 
    borderRadius: "10px",
    boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.5)",
  },
  heading: {
    fontSize: "2rem",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "1.5rem",
  },
};

export default App;

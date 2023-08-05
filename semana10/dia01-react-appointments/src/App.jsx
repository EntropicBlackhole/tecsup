import Header from "./components/Header.jsx";
import Appointments from "./pages/Appointments.jsx";

function App() {
    return (
        <>
          <Header title="Citas medicas para mascotas"></Header>
          <main>
            <Appointments/>
          </main>
        </>
    );
}

export default App
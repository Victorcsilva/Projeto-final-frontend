import { Routes, Route } from "react-router-dom";
import { AuthProvider, RequireAuth } from "./context/auth-context";
import Login from "./routes/Login";
import PublicPage from "./routes/PublicPage";
import ProtectedPage from "./routes/ProtectedPage";
import Home from "./routes/Home";
import Cadastro from './routes/Cadastro';
import Feed from "./Feed/Feed";

function App() {
  return (
    <AuthProvider>
      <Routes>

          <Route path="/" element={<PublicPage />} />
          <Route path="/home" element={< Home />} />
          <Route path="/cadastro" element={<Cadastro/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/feed" element={<Feed />} />

          <Route
            path="/protected"
            element={
              <RequireAuth>
                <ProtectedPage />
              </RequireAuth>
            }
          />
      </Routes>
    </AuthProvider>
  );
}

export default App;

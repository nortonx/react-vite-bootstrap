import './scss/styles.scss';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import NotFound from './components/NotFound.jsx';
import Home from './routes/Home';
import Form from "./routes/Form";
import About from './routes/About';


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="form" element={<Form />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;

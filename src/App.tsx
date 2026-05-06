import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './pages/home/HomePage';
import { Classes } from './pages/services/Classes';
import { Spaces } from './pages/services/Spaces';
import { Contacts } from './pages/services/Contacts';
import { Faq } from './pages/services/Faq';

function App() {

  return (
    <BrowserRouter>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    width: '100vw',
                }}
            >
                <Routes>
                    <Route path="/main" element={<HomePage />} />
                    <Route path="/classes" element={<Classes />} />
                    <Route path="/spaces" element={<Spaces />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/faq" element={<Faq />} />
                    <Route path="*" element={<Navigate to="/main" replace />} />
                </Routes>
            </div>
        </BrowserRouter>
  )
}

export default App

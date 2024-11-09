import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashbord";
import Team from "./scenes/team/Team";
import Invoices from "./scenes/invoices/Invoices";
import Contacts from "./scenes/contacts/Contacts";
import Form from "./scenes/form/Form"
import FAQ from "./scenes/FAQ/FAQ";
import Bar from "./scenes/Bar/Bar";
import Pie from "./scenes/Pie/Pie";
import Line from "./scenes/Line/Line";
import Geography from "./scenes/Geography/Geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/Calendar";
import { Analytics } from "@vercel/analytics/react"
function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
          <Analytics/>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
import { Route, Routes } from "react-router";
import "./App.css";
import MyNavbar from "./components/Navbar";
import Card from "./components/Card";
import Login from "./components/Login";
import PageLink from "./components/PageLink";
import UploadMail from "./components/UploadMail";
import EmailLinks from "./components/EmailLinks";
import MailLinksForm from "./components/MailLinksForm";
import MailForm from "./components/MailForm";
import Maillinks from "./components/Maillinks";
import NotMail from "./components/NotMail";
import User from "./components/User";
import EmailFiles from "./components/EmailFiles";
import EmailFilesAdd from "./components/EmailFilesAdd";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route exact path="/email" element={<MyNavbar />}>
          <Route index element={<Card />} />
          <Route path="/email/maillinksform" element={<MailLinksForm />} />
          <Route path="/email/pagelink" element={<PageLink />} />
          <Route path="/email/mailform" element={<MailForm />} />
          <Route path="/email/uploadmail" element={<UploadMail />} />
          <Route path="/email/emaillinks" element={<EmailLinks />} />
          <Route path="/email/maillinks" element={<Maillinks />} />
          <Route path="/email/notmail" element={<NotMail />} />
          <Route path="/email/user" element={<User />} />
          <Route path="/email/emailfiles" element={<EmailFiles/>} />
          <Route path="/email/emailfiles/add" element={<EmailFilesAdd/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

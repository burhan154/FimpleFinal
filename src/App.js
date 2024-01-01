
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import "./styles.css";

import { Route ,createBrowserRouter ,createRoutesFromElements, defer} from "react-router-dom"

import { 
  HomePage,SearchTicketPage,
  CreateTicketPage ,GetTicketPage,
  SuccessTicketPage,TicketsPage,
  EditTicketPage,LoginPage} from "./pages/Home";

import { ProtectedLayout,HomeLayout,AuthLayout } from "./components/Layout";

const getUserData = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      const user = window.localStorage.getItem("token");
      resolve(user);
    }, 2000)
  );

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={<AuthLayout />}
      loader={() => defer({ userPromise: getUserData() })}
    >
      <Route element={<HomeLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/basvuru-olustur" element={<CreateTicketPage />} />
        <Route path="/basvuru-basarili"   element={<SuccessTicketPage />} />
        <Route path="/basvuru-sorgula"  element={<SearchTicketPage />} />
        <Route path="/basvuru/:basvuruNo" element={<GetTicketPage />} />
        <Route path="/admin" element={<LoginPage />} />
      </Route>

      <Route path="/admin" element={<ProtectedLayout />}>
        <Route path="basvuru-listesi" element={<TicketsPage />} />
        <Route path="basvuru/:basvuruNo" element={<EditTicketPage />} />
      </Route>
    </Route>
  )
);


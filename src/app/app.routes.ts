import { Routes } from "@angular/router";
import { Login } from "./pages/login/login";
import { DashboardPage } from "./pages/dashboard-page/dashboard-page";
import { AuthGuard } from "./guards/auth-guard";
import { IndexPage } from "./pages/index-page/index-page";
import { FormAcesso } from "./pages/form-acesso/form-acesso";

export const routes: Routes = [
  {
    path: "",
    component: IndexPage,
  },
  {
    path: "login",
    component: Login,
  },
  {
    path: "cadastro",
    component: FormAcesso,
  },
  {
    path: "dashboard",
    component: DashboardPage,
    canActivate: [AuthGuard],
  },
];

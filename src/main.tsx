import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./screens/home";
import { Kids } from "./screens/kids";
import { Kid } from "./screens/kid";
import { Workshops } from "./screens/workshops";
import { Workshop } from "./screens/workshop";
import { Settings } from "./screens/settings";
import { CacheManager } from "./screens/settings/cache-manager";
import { Table } from "./screens/settings/table";
import { KidsList } from "./screens/settings/kids/list";
import { KidUpdate } from "./screens/settings/kids/edit";
import { CreateKid } from "./screens/settings/kids/create";
import { WorkshopsList } from "./screens/settings/workshops/list";
import { WorkshopUpdate } from "./screens/settings/workshops/edit";
import { CreateWorkshop } from "./screens/settings/workshops/create";
import { Progress } from "./screens/settings/progress";
import { basename } from "./config";
import { ProgressReport } from "./screens/settings/progress/report";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/kids",
      element: <Kids />,
    },
    {
      path: "/kids/:kidId",
      element: <Kid />,
    },
    {
      path: "/workshops",
      element: <Workshops />,
    },
    {
      path: "/workshops/:workshopId",
      element: <Workshop />,
    },
    {
      path: "/settings",
      element: <Settings />,
    },
    {
      path: "/settings/kids",
      element: <KidsList />,
    },
    {
      path: "/settings/kids/:kidId",
      element: <KidUpdate />,
    },
    {
      path: "/settings/kids/create",
      element: <CreateKid />,
    },
    {
      path: "/settings/workshops",
      element: <WorkshopsList />,
    },
    {
      path: "/settings/workshops/:workshopId",
      element: <WorkshopUpdate />,
    },
    {
      path: "/settings/workshops/create",
      element: <CreateWorkshop />,
    },
    {
      path: "/settings/cache",
      element: <CacheManager />,
    },
    {
      path: "/settings/table",
      element: <Table />,
    },
    {
      path: "/settings/progress",
      element: <Progress />,
    },
    {
      path: "/settings/progress/:mode",
      element: <ProgressReport />,
    },
  ],
  {
    basename,
  }
);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);

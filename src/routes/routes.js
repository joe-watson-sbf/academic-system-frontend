import { HomePageComponent } from '../pages/home/HomePageComponent';
import EditionProgramPage from '../pages/Program/EditionProgramPage';
import { DashBoardPageComponent } from './../pages/dashboard/DashBoardPageComponent';

export const routesApp = [
  {
    path: '/home',
    name: 'Home',
    component: <HomePageComponent />,
  },
  {
    path: '/dashboard',
    name: 'DashBoard',
    component: <DashBoardPageComponent />,
    child: [
      {
        path: 'casa',
        name: 'casa',
        component: <HomePageComponent />,
      },
      {
        path: 'edit',
        name: 'edit',
        component: <EditionProgramPage />,
      }
    ],
  },
];

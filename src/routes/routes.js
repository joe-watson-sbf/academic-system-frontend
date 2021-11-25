<<<<<<< HEAD
=======
import CourseDetail from '../pages/coursedetail/CourseDetailComponent';
import CoursesListComponent from '../pages/courseslist/CoursesListComponent';
>>>>>>> be45b5b4ccf0f27bc6b33678b54317062319c7e2
import { HomePageComponent } from '../pages/home/HomePageComponent';
import Welcome from '../pages/dashboard/components/welcome/Welcome.jsx';
import {
  DashBoardPageComponent,
  DashBoardApprenticeComponent,
} from './../pages/dashboard/DashBoardPageComponent';

import { CreateCoursePageComponent } from './../pages/createCourse/CreateCoursePageComponent';
import EditCoursePageComponent from './../pages/createCourse/Components/EditCoursePageComponent';
export const routesApp = [
  {
    path: '/dashboard',
    name: 'DashBoard',
    component: <DashBoardPageComponent />,
    child: [
      {
        path: 'home',
        name: 'Home',
        component: <Welcome />,
      },
      {
        path: 'logout',
        name: 'Log Out',
        component: <HomePageComponent />,
      },
      {
        path: 'trainingstory',
        name: 'Training Story',
        component: <h1>TRAINING STORY</h1>,
      },
      {
        path: 'activeprogram',
        name: 'Active Program',
        component: <h1>Active Program</h1>,
      },
      {
        path: 'program',
        name: 'Create Program',
        component: <h1>Create Program</h1>,
      },
      {
        path: 'programstory',
        name: 'Program Story',
        component: <h1>Program Story</h1>,
      },
      {
        path: 'activetraining',
        name: 'Active Training',
        component: <h1>Active Training</h1>,
      },
      {
        path: 'training',
        name: 'Create Training',
        component: <h1>Create Training</h1>,
      },
      {
        path: 'create/course',
        name: 'Create curso',
        component: <CreateCoursePageComponent />,
      },
      {
        path: 'edit/course/:courseId',
        name: 'Create curso',
        component: <EditCoursePageComponent />,
      },
    ],
  },
];

export const apprenticeRoutesApp = [
  {
    path: '/dashboard/apprentice',
    name: 'DashBoard',
    component: <DashBoardApprenticeComponent />,
    child: [
      {
        path: 'logout',
        name: 'Log Out',
        component: <HomePageComponent />,
      },
      {
        path: 'activetraining',
        name: 'Active Training',
        component: '',
      },
      {
        path: 'createCourse',
        name: 'Active Training',
        component: <CreateCoursePageComponent />,
      },
    ],
  },
];

export const studentRoutesApp = [
  {
    path: '/dashboard/student',
    name: 'DashBoard',
    component: <DashBoardApprenticeComponent></DashBoardApprenticeComponent>,
    child: [
      {
        path: 'logout',
        name: 'Log Out',
        component: <HomePageComponent />,
      },
      {
        path: 'exemple',
        name: 'Otra Ruta',
        component: <h1>Otra Ruta de Estudiante</h1>,
      },
    ],
  },
];

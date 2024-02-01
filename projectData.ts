import { ProjectType } from './types';

export const projectsData: ProjectType[] = [
  {
    description: 'Dig Webpack5',
    category: 'Webpack',
    imageSource: '/webpack.png',
    detail:
      'Researching webpack5 and realize the different bundle status under directories, including build-base-conf, build-multi-page, build-splitChunks and so on, in the end simulating the react.js bundle tool to bundle one typescript demo project and deploy online',
    projectLink: 'https://github.com/rick-liyue-huang/Try-Webpack',
    onlineLink: 'https://jovial-melomakarona-e7cb49.netlify.app',
  },
  {
    description: 'NextJS Firebase Netflix WebApp',
    category: 'NextJS MERN',
    imageSource: '/netflix.png',
    detail:
      'Using NextJS to create one Netflix simulated webapp, through which we can subscript the plan and watch the movie trailer',
    projectLink:
      'https://github.com/rick-liyue-huang/NextJS-Firebase-Netflix-WebApp',
    onlineLink: 'https://next-js-firebase-netflix-web-app.vercel.app',
  },
  {
    description: 'Firebase Based Reddit',
    category: 'NextJS Firebase Stripe',
    imageSource: '/reddit1.png',
    detail:
      'Using the Next.js and Firebase to clone the Reddit WebApp, in which we can login and register the new account and CRUD the community, post, comments and vote, the authorized user can also subscribe some plans by Stripe.',
    projectLink: 'https://github.com/rick-liyue-huang/NextJS-Reddit-WebApp',
    onlineLink: 'https://nextjs-reddit-webapp.vercel.app',
  },
  {
    description: 'Axios Simulation',
    category: 'Javascript',
    imageSource: '/axios-simulation.png',
    detail:
      'In this project mainly I use original javascript language to simulate Axios.js framework',
    projectLink: 'https://github.com/rick-liyue-huang/Axios-Simulation',
    onlineLink:
      'https://github.com/rick-liyue-huang/Axios-Simulation/blob/main/README.md',
  },
  {
    description: 'The Complete Auth System by NextJS',
    category: 'NextJS Mysql TailwindCSS',
    imageSource: '/auth-system.png',
    detail:
      'This is a complete authentication system built with NextJS, Mysql, and TailwindCSS. It is a complete system with login, register, and logout functionality. It also has a setting page that is only accessible to logged in users. The setting page is a protected route that redirects to the login page if the user is not logged in. The auth system includes email and password login method and social method. The login user can change the password, 2 factor verification and account role.',
    projectLink:
      'https://github.com/rick-liyue-huang/The-Completed-NextJS-Auth-System',
    onlineLink: 'https://the-completed-next-js-auth-system.vercel.app',
  },
  {
    description: 'NextJS GraphQL Reddit Webapp',
    category: 'NextJS GraphQL',
    imageSource: '/reddit2.png',
    detail:
      'This application will clone Reddit again, in which using NextJS to create front-end pages, using supabase to manage backend PostgreSQL database, and using StepZen to create GraphQL middle layer to query database and then render the data in pages by Apollo/Client.',
    projectLink:
      'https://github.com/rick-liyue-huang/NextJS-GraphQL-Reddit-Webapp',
    onlineLink: 'https://nextjs-graphql-reddit-webapp.vercel.app',
  },
];

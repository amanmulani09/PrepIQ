import Home from '../screens/home';
import QuestionDetails from '../screens/question-details';
import {Screens} from './constant';
import SignIn from '../screens/signin';
import SignUp from '../screens/signup';
import Languages from '../screens/languages';
import BookmarkQuestions from '../screens/saved';
import Profile from '../screens/profile';
export const AuthStackScreens = [
  {
    name: Screens.SIGNIN,
    component: SignIn,
  },
  {
    name: Screens.SIGNUP,
    component: SignUp,
  },
];

export const HomeTabStackScreens = [
  {
    name: Screens.QUESTIONDETAILS,
    component: QuestionDetails,
  },
];

export const TabItems = [
  {
    name: Screens.HOME,
    component: Home,
  },
  {
    name: Screens.LANGUAGUES,
    component: Languages,
  },
  {
    name: Screens.BOOKMARKS,
    component: BookmarkQuestions,
  },
  {
    name: Screens.PROFILE,
    component: Profile,
  },
];

import { GiHamburger, GiDonut, GiCarrot } from 'react-icons/gi';
import { RiSearch2Fill } from 'react-icons/ri';

const sidebarLinks = [
  {
    name: 'Discover',
    path: '/discover',
    icon: GiDonut,
  },
  {
    name: 'Categories',
    path: '/categories',
    icon: GiHamburger,
  },
  {
    name: 'Ingredients',
    path: '/ingredients',
    icon: GiCarrot,
  },
  {
    name: 'Search',
    path: '/search',
    icon: RiSearch2Fill,
  },
];

export default sidebarLinks;

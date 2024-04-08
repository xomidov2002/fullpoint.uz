import { type ServiceCard, type Templates } from '@/interfaces'
import { ref } from 'vue'
export function usePracticePage() {
  const serviceCard = ref<ServiceCard[]>([
    {
      id: 1,
      img: '/main.jpg',
      title: 'Marketing',
      subtitle:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolores quo necessitatibus consectetur deserunt quasi autem nisi quia? Dolor eligendi assumenda repellat distinctio ut, animi voluptatum excepturi quisquam, libero iusto nesciunt natus illum beatae quod tempora necessitatibus cupiditate, facilis autem.',
      btn: 'Batafsil',
      route: "/projects/marketing"
    },
    {
      id: 2,
      img: '/main.jpg',
      title: 'Moliya',
      subtitle:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolores quo necessitatibus consectetur deserunt quasi autem nisi quia? Dolor eligendi assumenda repellat distinctio ut, animi voluptatum excepturi quisquam, libero iusto nesciunt natus illum beatae quod tempora necessitatibus cupiditate, facilis autem.',
      btn: 'Batafsil',
      route: "/projects/moliya"
    },
    {
      id: 3,
      img: '/main.jpg',
      title: 'Buxgalteriya',
      subtitle:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolores quo necessitatibus consectetur deserunt quasi autem nisi quia? Dolor eligendi assumenda repellat distinctio ut, animi voluptatum excepturi quisquam, libero iusto nesciunt natus illum beatae quod tempora necessitatibus cupiditate, facilis autem.',
      btn: 'Batafsil',
      route: "/projects/buxgalteriya"
    },
    {
      id: 4,
      img: '/main.jpg',
      title: 'Arxitektura',
      subtitle:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolores quo necessitatibus consectetur deserunt quasi autem nisi quia? Dolor eligendi assumenda repellat distinctio ut, animi voluptatum excepturi quisquam, libero iusto nesciunt natus illum beatae quod tempora necessitatibus cupiditate, facilis autem.',
      btn: 'Batafsil',
      route: "/projects/arxitektura"
    },
    {
      id: 5,
      img: '/main.jpg',
      title: 'Qurilish',
      subtitle:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolores quo necessitatibus consectetur deserunt quasi autem nisi quia? Dolor eligendi assumenda repellat distinctio ut, animi voluptatum excepturi quisquam, libero iusto nesciunt natus illum beatae quod tempora necessitatibus cupiditate, facilis autem.',
      btn: 'Batafsil',
      route: "/projects/qurilish"
    },
    {
      id: 6,
      img: '/main.jpg',
      title: 'IT',
      subtitle:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolores quo necessitatibus consectetur deserunt quasi autem nisi quia? Dolor eligendi assumenda repellat distinctio ut, animi voluptatum excepturi quisquam, libero iusto nesciunt natus illum beatae quod tempora necessitatibus cupiditate, facilis autem.',
      btn: 'Batafsil',
      route: "/projects/it"
    },
    {
      id: 7,
      img: '/main.jpg',
      title: "Kamera o'rnatish",
      subtitle:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolores quo necessitatibus consectetur deserunt quasi autem nisi quia? Dolor eligendi assumenda repellat distinctio ut, animi voluptatum excepturi quisquam, libero iusto nesciunt natus illum beatae quod tempora necessitatibus cupiditate, facilis autem.',
      btn: 'Batafsil',
      route: "/projects/kamera"
    }
  ])
  return {
    serviceCard
  }
}

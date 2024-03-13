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
      route: "/services/marketing"
    },
    {
      id: 2,
      img: '/main.jpg',
      title: 'Moliya',
      subtitle:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolores quo necessitatibus consectetur deserunt quasi autem nisi quia? Dolor eligendi assumenda repellat distinctio ut, animi voluptatum excepturi quisquam, libero iusto nesciunt natus illum beatae quod tempora necessitatibus cupiditate, facilis autem.',
      btn: 'Batafsil',
      route: "/services/moliya"
    },
    {
      id: 3,
      img: '/main.jpg',
      title: 'Buxgalteriya',
      subtitle:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolores quo necessitatibus consectetur deserunt quasi autem nisi quia? Dolor eligendi assumenda repellat distinctio ut, animi voluptatum excepturi quisquam, libero iusto nesciunt natus illum beatae quod tempora necessitatibus cupiditate, facilis autem.',
      btn: 'Batafsil',
      route: "/services/buxgalteriya"
    },
    {
      id: 4,
      img: '/main.jpg',
      title: 'Arxitektura',
      subtitle:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolores quo necessitatibus consectetur deserunt quasi autem nisi quia? Dolor eligendi assumenda repellat distinctio ut, animi voluptatum excepturi quisquam, libero iusto nesciunt natus illum beatae quod tempora necessitatibus cupiditate, facilis autem.',
      btn: 'Batafsil',
      route: "/services/arxitektura"
    },
    {
      id: 5,
      img: '/main.jpg',
      title: 'Qurilish',
      subtitle:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolores quo necessitatibus consectetur deserunt quasi autem nisi quia? Dolor eligendi assumenda repellat distinctio ut, animi voluptatum excepturi quisquam, libero iusto nesciunt natus illum beatae quod tempora necessitatibus cupiditate, facilis autem.',
      btn: 'Batafsil',
      route: "/services/qurilish"
    },
    {
      id: 6,
      img: '/main.jpg',
      title: 'IT',
      subtitle:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolores quo necessitatibus consectetur deserunt quasi autem nisi quia? Dolor eligendi assumenda repellat distinctio ut, animi voluptatum excepturi quisquam, libero iusto nesciunt natus illum beatae quod tempora necessitatibus cupiditate, facilis autem.',
      btn: 'Batafsil',
      route: "/services/it"
    },
    {
      id: 7,
      img: '/main.jpg',
      title: "Kamera o'rnatish",
      subtitle:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolores quo necessitatibus consectetur deserunt quasi autem nisi quia? Dolor eligendi assumenda repellat distinctio ut, animi voluptatum excepturi quisquam, libero iusto nesciunt natus illum beatae quod tempora necessitatibus cupiditate, facilis autem.',
      btn: 'Batafsil',
      route: "/services/kamera"
    },
    {
      id: 7,
      img: '/main.jpg',
      title: 'Boshqa servislar',
      subtitle:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolores quo necessitatibus consectetur deserunt quasi autem nisi quia? Dolor eligendi assumenda repellat distinctio ut, animi voluptatum excepturi quisquam, libero iusto nesciunt natus illum beatae quod tempora necessitatibus cupiditate, facilis autem.',
      btn: 'Batafsil',
      route: "/services/boshqa_servislar"
    }
  ])
  return {
    serviceCard
  }
}

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
      route: "'/template/' + card.id"
    },
    {
      id: 2,
      img: '/main.jpg',
      title: 'Moliya',
      subtitle:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolores quo necessitatibus consectetur deserunt quasi autem nisi quia? Dolor eligendi assumenda repellat distinctio ut, animi voluptatum excepturi quisquam, libero iusto nesciunt natus illum beatae quod tempora necessitatibus cupiditate, facilis autem.',
      btn: 'Batafsil',
      route: "'/template/' + card.id"
    },
    {
      id: 3,
      img: '/main.jpg',
      title: 'Buxgalteriya',
      subtitle:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolores quo necessitatibus consectetur deserunt quasi autem nisi quia? Dolor eligendi assumenda repellat distinctio ut, animi voluptatum excepturi quisquam, libero iusto nesciunt natus illum beatae quod tempora necessitatibus cupiditate, facilis autem.',
      btn: 'Batafsil',
      route: "'/template/' + card.id"
    },
    {
      id: 4,
      img: '/main.jpg',
      title: 'Arxitektura',
      subtitle:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolores quo necessitatibus consectetur deserunt quasi autem nisi quia? Dolor eligendi assumenda repellat distinctio ut, animi voluptatum excepturi quisquam, libero iusto nesciunt natus illum beatae quod tempora necessitatibus cupiditate, facilis autem.',
      btn: 'Batafsil',
      route: "'/template/' + card.id"
    },
    {
      id: 5,
      img: '/main.jpg',
      title: 'Qurilish',
      subtitle:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolores quo necessitatibus consectetur deserunt quasi autem nisi quia? Dolor eligendi assumenda repellat distinctio ut, animi voluptatum excepturi quisquam, libero iusto nesciunt natus illum beatae quod tempora necessitatibus cupiditate, facilis autem.',
      btn: 'Batafsil',
      route: "'/template/' + card.id"
    },
    {
      id: 6,
      img: '/main.jpg',
      title: 'IT',
      subtitle:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolores quo necessitatibus consectetur deserunt quasi autem nisi quia? Dolor eligendi assumenda repellat distinctio ut, animi voluptatum excepturi quisquam, libero iusto nesciunt natus illum beatae quod tempora necessitatibus cupiditate, facilis autem.',
      btn: 'Batafsil',
      route: "'/template/' + card.id"
    },
    {
      id: 7,
      img: '/main.jpg',
      title: 'Boshqa servislar',
      subtitle:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolores quo necessitatibus consectetur deserunt quasi autem nisi quia? Dolor eligendi assumenda repellat distinctio ut, animi voluptatum excepturi quisquam, libero iusto nesciunt natus illum beatae quod tempora necessitatibus cupiditate, facilis autem.',
      btn: 'Batafsil',
      route: "'/template/' + card.id"
    }
  ])
  return {
    serviceCard
  }
}
export function useTemplatePage() {
  const templates = ref<Templates[]>([
    {
      id: 1,
      img: '/images.jpg',
      name: 'something'
    },
    {
      id: 2,
      img: '/images.jpg',
      name: 'something'
    },
    {
      id: 3,
      img: '/images.jpg',
      name: 'something'
    },
    {
      id: 4,
      img: '/images.jpg',
      name: 'something'
    }
  ])
  return {
    templates
  }
}

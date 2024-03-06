import { type ServiceCard } from "@/interfaces" 
import { ref } from "vue"
export function usePracticePage() {
  const serviceCard = ref<ServiceCard[]>([
    {
      img: '/main.jpg',
      title: 'Marketing',
      subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolores quo necessitatibus consectetur deserunt quasi autem nisi quia? Dolor eligendi assumenda repellat distinctio ut, animi voluptatum excepturi quisquam, libero iusto nesciunt natus illum beatae quod tempora necessitatibus cupiditate, facilis autem.",
      btn: 'Batafsil',
      route: '/marketing'
    },
    {
      img: '/main.jpg',
      title: 'Moliya',
      subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolores quo necessitatibus consectetur deserunt quasi autem nisi quia? Dolor eligendi assumenda repellat distinctio ut, animi voluptatum excepturi quisquam, libero iusto nesciunt natus illum beatae quod tempora necessitatibus cupiditate, facilis autem.",
      btn: 'Batafsil',
      route: '/moliya'
    },
    {
      img: '/main.jpg',
      title: 'Buxgalteriya',
      subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolores quo necessitatibus consectetur deserunt quasi autem nisi quia? Dolor eligendi assumenda repellat distinctio ut, animi voluptatum excepturi quisquam, libero iusto nesciunt natus illum beatae quod tempora necessitatibus cupiditate, facilis autem.",
      btn: 'Batafsil',
      route: '/buxgalteriya'
    },
    {
      img: '/main.jpg',
      title: 'Arxitektura',
      subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolores quo necessitatibus consectetur deserunt quasi autem nisi quia? Dolor eligendi assumenda repellat distinctio ut, animi voluptatum excepturi quisquam, libero iusto nesciunt natus illum beatae quod tempora necessitatibus cupiditate, facilis autem.",
      btn: 'Batafsil',
      route: '/arxitektura'
    },
    {
      img: '/main.jpg',
      title: 'Qurilish',
      subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolores quo necessitatibus consectetur deserunt quasi autem nisi quia? Dolor eligendi assumenda repellat distinctio ut, animi voluptatum excepturi quisquam, libero iusto nesciunt natus illum beatae quod tempora necessitatibus cupiditate, facilis autem.",
      btn: 'Batafsil',
      route: '/qurilish'
    },
    {
      img: '/main.jpg',
      title: 'IT',
      subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolores quo necessitatibus consectetur deserunt quasi autem nisi quia? Dolor eligendi assumenda repellat distinctio ut, animi voluptatum excepturi quisquam, libero iusto nesciunt natus illum beatae quod tempora necessitatibus cupiditate, facilis autem.",
      btn: 'Batafsil',
      route: '/it'
    },
    {
      img: '/main.jpg',
      title: 'Boshqa servislar',
      subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolores quo necessitatibus consectetur deserunt quasi autem nisi quia? Dolor eligendi assumenda repellat distinctio ut, animi voluptatum excepturi quisquam, libero iusto nesciunt natus illum beatae quod tempora necessitatibus cupiditate, facilis autem.",
      btn: 'Batafsil',
      route: '/Servislar'
    }
  ])
  return {
    serviceCard
  }
}
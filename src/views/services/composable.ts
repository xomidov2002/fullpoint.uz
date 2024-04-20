import { reactive } from "vue";
import { type ServiceInfo } from "@/interfaces";
export function useServiceCard() {
  const serviceCards = reactive<ServiceInfo[]>([
    {
      id: 0,
      title: 'Marketing',
      subtitle: 'Office ipsum you must be muted. Optimal my idea best opportunity ensure cc shift.'
    },
    {
      id: 1,
      title: 'Moliya',
      subtitle: 'Office ipsum you must be muted. Optimal my idea best opportunity ensure cc shift.'
    },
    {
      id: 2,
      title: 'Buxgalteriya',
      subtitle: 'Office ipsum you must be muted. Optimal my idea best opportunity ensure cc shift.'
    },
    {
      id: 3,
      title: 'Arxitektura',
      subtitle: 'Office ipsum you must be muted. Optimal my idea best opportunity ensure cc shift.'
    },
    {
      id: 4,
      title: 'Qurilish',
      subtitle: 'Office ipsum you must be muted. Optimal my idea best opportunity ensure cc shift.'
    },
    {
      id: 5,
      title: 'IT',
      subtitle: 'Office ipsum you must be muted. Optimal my idea best opportunity ensure cc shift.'
    },
    {
      id: 6,
      title: "Kamera o'rnatish",
      subtitle: 'Office ipsum you must be muted. Optimal my idea best opportunity ensure cc shift.'
    }
  ])
  return{
    serviceCards
  }
}
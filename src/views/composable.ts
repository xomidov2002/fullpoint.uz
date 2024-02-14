import { type PracticeCards } from "@/interfaces" 
import { ref } from "vue"
export function usePracticePage() {
  const practiceCards = ref<PracticeCards[]>([
    {
      title: 'A single source of truth',
      subtitle: 'Newton thought that light was made up of particles, but then it was discovered',
      img: '/advices/1.jpg'
    },
    {
      title: 'Fastest way to organize',
      subtitle: '“Quantum mechanics”is the description of the behaviour of matter',
      img: '/advices/2.jpg'
    },
    {
      title: 'Fastest way to take action',
      subtitle: 'They describe a universe consisting of bodies moving',
      img: '/advices/3.jpg'
    },
    {
      title: 'Work better together',
      subtitle: 'They finally obtained a consistent description of the behaviour ',
      img: '/advices/4.jpg'
    }
  ])
  return {
    practiceCards
  }
}
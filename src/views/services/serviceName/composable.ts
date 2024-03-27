import { type TableCard } from "@/interfaces";
import { ref } from "vue";

export function useMarketingTable() {
  const marketingWorks = ref<TableCard[]>([
    {
      id: 1,
      work: "«Организация производства и ремонта горно-металлургических машин и оборудования на базе Центрального ремонтно-механического завода АО «Алмалыкский ГМК» ",
      name: "АО «O’ZOG’IRSANOATLOYIHA»",
      date: '2023 май'
    },
    {
      id: 2,
      work: "«Организация новых штампосварных мощностей на территории АО «Uzauto Motors» в г. Асака, Андижанской области» ",
      name: 'АО «O’ZOG’IRSANOATLOYIHA»',
      date: '2023 сентябрь'
    },
    {
      id: 3,
      work: "«Организация производства автомобилей на новых источниках энергии» ",
      name: "АО «O’ZOG’IRSANOATLOYIHA»",
      date: '2023 сентябрь'
    }
  ])
  const openStudentsModal = ref<boolean>(false)
  function clickModal (val:string){
      if(val == 'close') {
        openStudentsModal.value = false
        console.log('closed')
      }
  }
  return{
    marketingWorks,
    clickModal,
    openStudentsModal
  }
}
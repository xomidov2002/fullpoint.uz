import { type TableCard } from "@/interfaces";
import { ref } from "vue";

export function useMarketingTable() {
  const marketingWorks = ref<TableCard[]>([
    {
      id: 1,
      work: "«Организация производства и ремонта горно-металлургических машин и оборудования на базе Центрального ремонтно-механического завода АО «Алмалыкский ГМК» ",
      name: "АО «O’ZOG’IRSANOATLOYIHA»",
      date: '2023 май',
      images: ['/advices/1.jpg', '/advices/2.jpg', '/advices/3.jpg', '/advices/4.jpg'],
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit minus temporibus sit officia, in enim repellendus illum iusto. Numquam voluptatum dicta fuga ad quibusdam distinctio molestiae quidem cumque? Numquam tempora quis ipsam debitis dolores excepturi sint delectus mollitia eaque saepe."
    },
    {
      id: 2,
      work: "«Организация новых штампосварных мощностей на территории АО «Uzauto Motors» в г. Асака, Андижанской области» ",
      name: 'АО «O’ZOG’IRSANOATLOYIHA»',
      date: '2023 сентябрь',
      images: ['/advices/2.jpg', '/advices/1.jpg', '/advices/3.jpg', '/advices/4.jpg'],
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit minus temporibus sit officia, in enim repellendus illum iusto. Numquam voluptatum dicta fuga ad quibusdam distinctio molestiae quidem cumque? Numquam tempora quis ipsam debitis dolores excepturi sint delectus mollitia eaque saepe."
    },
    {
      id: 3,
      work: "«Организация производства автомобилей на новых источниках энергии» ",
      name: "АО «O’ZOG’IRSANOATLOYIHA»",
      date: '2023 сентябрь',
      images: ['/advices/3.jpg', '/advices/2.jpg', '/advices/4.jpg', '/advices/1.jpg'],
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit minus temporibus sit officia, in enim repellendus illum iusto. Numquam voluptatum dicta fuga ad quibusdam distinctio molestiae quidem cumque? Numquam tempora quis ipsam debitis dolores excepturi sint delectus mollitia eaque saepe."
    },
    {
      id: 4,
      work: "«Организация производства автомобилей на новых источниках энергии» ",
      name: "АО «O’ZOG’IRSANOATLOYIHA»",
      date: '2023 сентябрь',
      images: ['/advices/4.jpg', '/advices/2.jpg', '/advices/3.jpg', '/advices/1.jpg'],
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit minus temporibus sit officia, in enim repellendus illum iusto. Numquam voluptatum dicta fuga ad quibusdam distinctio molestiae quidem cumque? Numquam tempora quis ipsam debitis dolores excepturi sint delectus mollitia eaque saepe."
    }
  ])
  return{
    marketingWorks
  }
}
import { type TableCard } from "@/interfaces";
import { reactive } from "vue";

export function useServiceTable() {
  const arxitekturaWorks = reactive<TableCard[]>([
    {
      id: 0,
      work: "«Организация производства и ремонта горно-металлургических машин и оборудования на базе Центрального ремонтно-механического завода АО «Алмалыкский ГМК» ",
      name: "АО «O’ZOG’IRSANOATLOYIHA»",
      date: '2023 май',
      images: ['/advices/1.jpg', '/advices/2.jpg', '/advices/3.jpg', '/advices/4.jpg'],
      info: "this is first ID"
    },
    {
      id: 1,
      work: "«Организация новых штампосварных мощностей на территории АО «Uzauto Motors» в г. Асака, Андижанской области» ",
      name: 'АО «O’ZOG’IRSANOATLOYIHA»',
      date: '2023 сентябрь',
      images: ['/advices/2.jpg', '/advices/1.jpg', '/advices/3.jpg', '/advices/4.jpg'],
      info: "this is second ID"
    },
    {
      id: 2,
      work: "«Организация производства автомобилей на новых источниках энергии» ",
      name: "АО «O’ZOG’IRSANOATLOYIHA»",
      date: '2023 сентябрь',
      images: ['/advices/3.jpg', '/advices/2.jpg', '/advices/4.jpg', '/advices/1.jpg'],
      info: "this is third ID"
    },
    {
      id: 3,
      work: "«Организация производства автомобилей на новых источниках энергии» ",
      name: "АО «O’ZOG’IRSANOATLOYIHA»",
      date: '2023 сентябрь',
      images: ['/advices/4.jpg', '/advices/2.jpg', '/advices/3.jpg', '/advices/1.jpg'],
      info: "this is fourth ID"
    }
  ])

  const buxgalteriyaWorks = reactive<TableCard[]>([
    {
      id: 0,
      work: "«Организация производства и ремонта горно-металлургических машин и оборудования на базе Центрального ремонтно-механического завода АО «Алмалыкский ГМК» ",
      name: "АО «O’ZOG’IRSANOATLOYIHA»",
      date: '2023 май',
      images: ['/advices/1.jpg', '/advices/2.jpg', '/advices/3.jpg', '/advices/4.jpg'],
      info: "this is first ID"
    },
    {
      id: 1,
      work: "«Организация новых штампосварных мощностей на территории АО «Uzauto Motors» в г. Асака, Андижанской области» ",
      name: 'АО «O’ZOG’IRSANOATLOYIHA»',
      date: '2023 сентябрь',
      images: ['/advices/2.jpg', '/advices/1.jpg', '/advices/3.jpg', '/advices/4.jpg'],
      info: "this is second ID"
    },
    {
      id: 2,
      work: "«Организация производства автомобилей на новых источниках энергии» ",
      name: "АО «O’ZOG’IRSANOATLOYIHA»",
      date: '2023 сентябрь',
      images: ['/advices/3.jpg', '/advices/2.jpg', '/advices/4.jpg', '/advices/1.jpg'],
      info: "this is third ID"
    },
    {
      id: 3,
      work: "«Организация производства автомобилей на новых источниках энергии» ",
      name: "АО «O’ZOG’IRSANOATLOYIHA»",
      date: '2023 сентябрь',
      images: ['/advices/4.jpg', '/advices/2.jpg', '/advices/3.jpg', '/advices/1.jpg'],
      info: "this is fourth ID"
    }
  ])

  const dasturlashWorks = reactive<TableCard[]>([
    {
      id: 0,
      work: "«Организация производства и ремонта горно-металлургических машин и оборудования на базе Центрального ремонтно-механического завода АО «Алмалыкский ГМК» ",
      name: "АО «O’ZOG’IRSANOATLOYIHA»",
      date: '2023 май',
      images: ['/advices/1.jpg', '/advices/2.jpg', '/advices/3.jpg', '/advices/4.jpg'],
      info: "this is first ID"
    },
    {
      id: 1,
      work: "«Организация новых штампосварных мощностей на территории АО «Uzauto Motors» в г. Асака, Андижанской области» ",
      name: 'АО «O’ZOG’IRSANOATLOYIHA»',
      date: '2023 сентябрь',
      images: ['/advices/2.jpg', '/advices/1.jpg', '/advices/3.jpg', '/advices/4.jpg'],
      info: "this is second ID"
    },
    {
      id: 2,
      work: "«Организация производства автомобилей на новых источниках энергии» ",
      name: "АО «O’ZOG’IRSANOATLOYIHA»",
      date: '2023 сентябрь',
      images: ['/advices/3.jpg', '/advices/2.jpg', '/advices/4.jpg', '/advices/1.jpg'],
      info: "this is third ID"
    },
    {
      id: 3,
      work: "«Организация производства автомобилей на новых источниках энергии» ",
      name: "АО «O’ZOG’IRSANOATLOYIHA»",
      date: '2023 сентябрь',
      images: ['/advices/4.jpg', '/advices/2.jpg', '/advices/3.jpg', '/advices/1.jpg'],
      info: "this is fourth ID"
    }
  ])

  const kameraWorks = reactive<TableCard[]>([
    {
      id: 0,
      work: "«Организация производства и ремонта горно-металлургических машин и оборудования на базе Центрального ремонтно-механического завода АО «Алмалыкский ГМК» ",
      name: "АО «O’ZOG’IRSANOATLOYIHA»",
      date: '2023 май',
      images: ['/advices/1.jpg', '/advices/2.jpg', '/advices/3.jpg', '/advices/4.jpg'],
      info: "this is first ID"
    },
    {
      id: 1,
      work: "«Организация новых штампосварных мощностей на территории АО «Uzauto Motors» в г. Асака, Андижанской области» ",
      name: 'АО «O’ZOG’IRSANOATLOYIHA»',
      date: '2023 сентябрь',
      images: ['/advices/2.jpg', '/advices/1.jpg', '/advices/3.jpg', '/advices/4.jpg'],
      info: "this is second ID"
    },
    {
      id: 2,
      work: "«Организация производства автомобилей на новых источниках энергии» ",
      name: "АО «O’ZOG’IRSANOATLOYIHA»",
      date: '2023 сентябрь',
      images: ['/advices/3.jpg', '/advices/2.jpg', '/advices/4.jpg', '/advices/1.jpg'],
      info: "this is third ID"
    },
    {
      id: 3,
      work: "«Организация производства автомобилей на новых источниках энергии» ",
      name: "АО «O’ZOG’IRSANOATLOYIHA»",
      date: '2023 сентябрь',
      images: ['/advices/4.jpg', '/advices/2.jpg', '/advices/3.jpg', '/advices/1.jpg'],
      info: "this is fourth ID"
    }
  ])

  const marketingWorks = reactive<TableCard[]>([
    {
      id: 0,
      work: "«Организация производства и ремонта горно-металлургических машин и оборудования на базе Центрального ремонтно-механического завода АО «Алмалыкский ГМК» ",
      name: "АО «O’ZOG’IRSANOATLOYIHA»",
      date: '2023 май',
      images: ['/advices/1.jpg', '/advices/2.jpg', '/advices/3.jpg', '/advices/4.jpg'],
      info: "this is first ID"
    },
    {
      id: 1,
      work: "«Организация новых штампосварных мощностей на территории АО «Uzauto Motors» в г. Асака, Андижанской области» ",
      name: 'АО «O’ZOG’IRSANOATLOYIHA»',
      date: '2023 сентябрь',
      images: ['/advices/2.jpg', '/advices/1.jpg', '/advices/3.jpg', '/advices/4.jpg'],
      info: "this is second ID"
    },
    {
      id: 2,
      work: "«Организация производства автомобилей на новых источниках энергии» ",
      name: "АО «O’ZOG’IRSANOATLOYIHA»",
      date: '2023 сентябрь',
      images: ['/advices/3.jpg', '/advices/2.jpg', '/advices/4.jpg', '/advices/1.jpg'],
      info: "this is third ID"
    },
    {
      id: 3,
      work: "«Организация производства автомобилей на новых источниках энергии» ",
      name: "АО «O’ZOG’IRSANOATLOYIHA»",
      date: '2023 сентябрь',
      images: ['/advices/4.jpg', '/advices/2.jpg', '/advices/3.jpg', '/advices/1.jpg'],
      info: "this is fourth ID"
    }
  ])

  const moliyaWorks = reactive<TableCard[]>([
    {
      id: 0,
      work: "«Организация производства и ремонта горно-металлургических машин и оборудования на базе Центрального ремонтно-механического завода АО «Алмалыкский ГМК» ",
      name: "АО «O’ZOG’IRSANOATLOYIHA»",
      date: '2023 май',
      images: ['/advices/1.jpg', '/advices/2.jpg', '/advices/3.jpg', '/advices/4.jpg'],
      info: "this is first ID"
    },
    {
      id: 1,
      work: "«Организация новых штампосварных мощностей на территории АО «Uzauto Motors» в г. Асака, Андижанской области» ",
      name: 'АО «O’ZOG’IRSANOATLOYIHA»',
      date: '2023 сентябрь',
      images: ['/advices/2.jpg', '/advices/1.jpg', '/advices/3.jpg', '/advices/4.jpg'],
      info: "this is second ID"
    },
    {
      id: 2,
      work: "«Организация производства автомобилей на новых источниках энергии» ",
      name: "АО «O’ZOG’IRSANOATLOYIHA»",
      date: '2023 сентябрь',
      images: ['/advices/3.jpg', '/advices/2.jpg', '/advices/4.jpg', '/advices/1.jpg'],
      info: "this is third ID"
    },
    {
      id: 3,
      work: "«Организация производства автомобилей на новых источниках энергии» ",
      name: "АО «O’ZOG’IRSANOATLOYIHA»",
      date: '2023 сентябрь',
      images: ['/advices/4.jpg', '/advices/2.jpg', '/advices/3.jpg', '/advices/1.jpg'],
      info: "this is fourth ID"
    }
  ])

  const qurilishWorks = reactive<TableCard[]>([
    {
      id: 0,
      work: "«Организация производства и ремонта горно-металлургических машин и оборудования на базе Центрального ремонтно-механического завода АО «Алмалыкский ГМК» ",
      name: "АО «O’ZOG’IRSANOATLOYIHA»",
      date: '2023 май',
      images: ['/advices/1.jpg', '/advices/2.jpg', '/advices/3.jpg', '/advices/4.jpg'],
      info: "this is first ID"
    },
    {
      id: 1,
      work: "«Организация новых штампосварных мощностей на территории АО «Uzauto Motors» в г. Асака, Андижанской области» ",
      name: 'АО «O’ZOG’IRSANOATLOYIHA»',
      date: '2023 сентябрь',
      images: ['/advices/2.jpg', '/advices/1.jpg', '/advices/3.jpg', '/advices/4.jpg'],
      info: "this is second ID"
    },
    {
      id: 2,
      work: "«Организация производства автомобилей на новых источниках энергии» ",
      name: "АО «O’ZOG’IRSANOATLOYIHA»",
      date: '2023 сентябрь',
      images: ['/advices/3.jpg', '/advices/2.jpg', '/advices/4.jpg', '/advices/1.jpg'],
      info: "this is third ID"
    },
    {
      id: 3,
      work: "«Организация производства автомобилей на новых источниках энергии» ",
      name: "АО «O’ZOG’IRSANOATLOYIHA»",
      date: '2023 сентябрь',
      images: ['/advices/4.jpg', '/advices/2.jpg', '/advices/3.jpg', '/advices/1.jpg'],
      info: "this is fourth ID"
    }
  ])
  return{
    marketingWorks,
    arxitekturaWorks,
    buxgalteriyaWorks,
    dasturlashWorks,
    kameraWorks,
    moliyaWorks,
    qurilishWorks
  }
}
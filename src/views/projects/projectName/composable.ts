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
    },
    {
      id: 4,
      work: "Маркетинговое исследование для текстильной продукции (лёгкая промышленность)",
      name: "ООО «Perfect Textile Company»",
      date: '2021 март',
      images: ['/advices/4.jpg', '/advices/2.jpg', '/advices/3.jpg', '/advices/1.jpg'],
      info: "this is fifth ID"
    },
    {
      id: 5,
      work: "Маркетинговое исследование в сфере общепита",
      name: "ООО «Belissimo»",
      date: '2021 февраль',
      images: ['/advices/4.jpg', '/advices/2.jpg', '/advices/3.jpg', '/advices/1.jpg'],
      info: "this is sixth ID"
    },
    {
      id: 6,
      work: "Маркетинговое исследование в сфере общепита и продвижение брэнда",
      name: "Сеть ресторанов «Farfor» (Россия)",
      date: '2022-2023 гг',
      images: ['/advices/4.jpg', '/advices/2.jpg', '/advices/3.jpg', '/advices/1.jpg'],
      info: "this is seventh ID"
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
      work: "«Создание сайта для ООО «Sun-hightech» ",
      name: "ООО «Sun-hightech»",
      date: '2023 май',
      images: ['/advices/1.jpg', '/advices/2.jpg', '/advices/3.jpg', '/advices/4.jpg'],
      info: "http://sunhightech.uz"
    }
  ])

  const kameraWorks = reactive<TableCard[]>([
    {
      id: 0,
      work: "Установка камер видеонаблюдения в общежитии Ташкентского государственного юридического университета",
      name: "Ташкентский государственный юридический университет",
      date: '2023 май',
      images: ['/advices/1.jpg', '/advices/2.jpg', '/advices/3.jpg', '/advices/4.jpg'],
      info: "this is first ID"
    },
    {
      id: 1,
      work: "«Камеры видеонаблюдения ООО «Sun-highttech» ",
      name: 'ООО «Sun-highttech»',
      date: '2023 сентябрь',
      images: ['/advices/2.jpg', '/advices/1.jpg', '/advices/3.jpg', '/advices/4.jpg'],
      info: "this is second ID"
    },
    {
      id: 2,
      work: "Установка камер наблюдения в золотом магазине Заррина",
      name: "OOO «ZARRIN»",
      date: '2023 сентябрь',
      images: ['/advices/3.jpg', '/advices/2.jpg', '/advices/4.jpg', '/advices/1.jpg'],
      info: "this is third ID"
    },
    {
      id: 3,
      work: "Установка камер наблюдения на Чирчикском трансформаторном заводе",
      name: "Чирчикский трансформаторный завод",
      date: '2023 сентябрь',
      images: ['/advices/4.jpg', '/advices/2.jpg', '/advices/3.jpg', '/advices/1.jpg'],
      info: "this is fourth ID"
    },
    {
      id: 4,
      work: "Установка камер наблюдения на стоянке Abu Sakhi CAR",
      name: "Abu Sakhi",
      date: '2023 сентябрь',
      images: ['/advices/4.jpg', '/advices/2.jpg', '/advices/3.jpg', '/advices/1.jpg'],
      info: "this is fourth ID"
    },
    {
      id: 5,
      work: "Торговый комплекс Абу Сахи ТРЕЙД ЦЕНТР",
      name: "Abu Sakhi",
      date: '2023 сентябрь',
      images: ['/advices/4.jpg', '/advices/2.jpg', '/advices/3.jpg', '/advices/1.jpg'],
      info: "this is fourth ID"
    },
    {
      id: 6,
      work: "Установка камер наблюдения на стадионе ФУТБОЛЬНОГО КЛУБА НАМАНГАНА НАВБАХОР",
      name: "Наманган ФУТБОЛЬНЫЙ КЛУБ НАВБАХОР",
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
    },
    {
      id: 4,
      work: "Маркетинговое исследование для текстильной продукции (лёгкая промышленность)",
      name: "ООО «Perfect Textile Company»",
      date: '2021 март',
      images: ['/advices/4.jpg', '/advices/2.jpg', '/advices/3.jpg', '/advices/1.jpg'],
      info: "this is fifth ID"
    },
    {
      id: 5,
      work: "Маркетинговое исследование в сфере общепита",
      name: "ООО «Belissimo»",
      date: '2021 февраль',
      images: ['/advices/4.jpg', '/advices/2.jpg', '/advices/3.jpg', '/advices/1.jpg'],
      info: "this is sixth ID"
    },
    {
      id: 6,
      work: "Маркетинговое исследование в сфере общепита и продвижение брэнда",
      name: "Сеть ресторанов «Farfor» (Россия)",
      date: '2022-2023 гг',
      images: ['/advices/4.jpg', '/advices/2.jpg', '/advices/3.jpg', '/advices/1.jpg'],
      info: "this is seventh ID"
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
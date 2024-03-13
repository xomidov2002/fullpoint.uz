interface SubMenu{
  name: string,
  route: string
}
export interface NavLink {
  id: number,
  name: string,
  path: string,
}
export interface Services {
  id: number,
  icon: string,
  num: string,
  name: string
}
export interface Cards {
  id: number,
  icon: string,
  hover: string,
  title: string,
  subtitle: string
}
export interface PracticeCards {
  title: string,
  subtitle: string,
  img: string
}
export interface IntouchCards {
  icon: string,
  hoverIcon: string,
  subtitle: string,
  title: string
}
export interface ServiceCard {
  id: number,
  img: string,
  title: string,
  subtitle: string,
  btn: string,
  route: string
}
export interface Templates {
  id: number,
  img: string,
  name: string 
}
export interface TableCard {
  id: number, 
  work: string,
  name: string,
  date: string
}
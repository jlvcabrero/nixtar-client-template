import config from '../config.json'

export type SiteConfig = typeof config
export type Servicio = { nombre: string; descripcion: string }
export type PorQueElegirnos = { titulo: string; descripcion: string }
export type Resena = { nombre: string; texto: string }
export type Horario = { dia: string; horas: string }

export default config as SiteConfig

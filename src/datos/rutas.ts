// Nota: si tu profe te dio un código de partida distinto, reemplaza este archivo por el suyo.
export type Dificultad = 'baja' | 'media' | 'alta'

export interface Ruta {
  id: number
  nombre: string
  municipio: string
  duracionHoras: number
  precio: number // en pesos colombianos
  dificultad: Dificultad
  incluyeTransporte: boolean
}

export const TEXTO_DIFICULTAD: Record<Dificultad, string> = {
  baja: 'Dificultad baja',
  media: 'Dificultad media',
  alta: 'Dificultad alta',
}

export const rutas: Ruta[] = [
  { id: 1, nombre: 'Valle de Cocora', municipio: 'Salento', duracionHoras: 6, precio: 85000, dificultad: 'media', incluyeTransporte: true },
  { id: 2, nombre: 'Ruta del café', municipio: 'Montenegro', duracionHoras: 4, precio: 60000, dificultad: 'baja', incluyeTransporte: false },
  { id: 3, nombre: 'Pueblito Genovés', municipio: 'Génova', duracionHoras: 8, precio: 120000, dificultad: 'alta', incluyeTransporte: true },
  { id: 4, nombre: 'Mirador de Filandia', municipio: 'Filandia', duracionHoras: 3, precio: 45000, dificultad: 'baja', incluyeTransporte: false },
  { id: 5, nombre: 'Termales de Quimbaya', municipio: 'Quimbaya', duracionHoras: 5, precio: 95000, dificultad: 'baja', incluyeTransporte: true },
  { id: 6, nombre: 'Cascadas de Calarcá', municipio: 'Calarcá', duracionHoras: 7, precio: 110000, dificultad: 'alta', incluyeTransporte: false },
]

import { agent } from './agent'

export const rateService = base => {
  if (base) return agent.get(`/latest?base=${base}`)
  return agent.get(`/latest`)
}

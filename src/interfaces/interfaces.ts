export interface validationProps {
  id: string
  isValid: boolean
}

interface titleProps {
  name: string
  variant: string
}

interface pricingProps {
  cashPricePrefix: string
  cashPrice?: number
  monthlyPayment?: number
  deposit?: number
  financeHeading?: string
}

interface salesInfoProps {
  pricing: pricingProps
  summary: object
  highlightedFeature: string
}

interface searchResultsProps {
  salesInfo: salesInfoProps
  isReserved: boolean
  make: string
  model: string
  title: titleProps
}

export interface carDataProps {
  availableMakes: string[][]
  count: number
  delivery: object
  banner: object
  searchResults: searchResultsProps[]
  searchTitle: string
  title: string
  pagination: object
}

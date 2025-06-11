// for components
export type ProductType = {
    herotitle?: string
    featureage?: string 
    featurebatchsize?: string 
    featureclasses?: string
    enrolltitle?: string
    enrollclass?: string
    enrollbatch?: string
}

// for page.tsx
export interface Product {
  id: number
  slug: string
  herotitle: string
  featureage: string
  featurebatchsize: string
  featureclasses: string
  learncoursescard: {
    id: number
    title: string
    desc: string
  }[]
  learnsyllabus: {
    id: number
    title: string
  }[]
  learnbenefits: {
    id: number
    benefit: string
  }[]
  enrolltitle: string
  enrollbatch: string
  enrollclass: string
}

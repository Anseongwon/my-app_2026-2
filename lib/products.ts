import { StagedRenderingController } from 'next/dist/server/app-render/staged-rendering'

export type Product = {
  id: string
  name: string
  description: string
  likes: number
}

const Products: Product[] = [
  {
    id: '1',
    name: '웹서버보안프로그래밍 머그컵',
    description: '수업 중 마실 커피를 위한 머그컵',
    likes: 3,
  },
  {
    id: '2',
    name: 'Next.js 스티커 팩',
    description: '노트북에 붙이는 프레임워크 스티커 모음',
    likes: 5,
  },
  {
    id: '3',
    name: 'OWASP Top 10 포스터',
    description: '책상 앞에 붙여두는 보안 체크리스트',
    likes: 8,
  },
]

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function getProducts(): Promise<Product[]> {
  await delay(700)
  return Products
}

export async function getProduct(id: string): Promise<Product | undefined> {
  await delay(400)
  return Products.find((p) => p.id === id)
}

export async function likeProduct(id: string): Promise<number> {
  await delay(300)
  const Product = Products.find((p) => p.id === id)
  if (!Product) return 0
  Product.likes += 1
  return Product.likes
}

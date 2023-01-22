import ShopLayout from '@/components/layouts/Shop'
import ShopHeader from '@/components/products/Header'
import Products from '@/components/products/Products'
import * as api from '@/services/api'
import React from 'react'

export default function products ({ products }) {
  return (
        <ShopLayout title={'فروشگاه آنلاین'}>
            <ShopHeader />
            <Products />
        </ShopLayout>
  )
}

export async function getStaticProps () {
  const products = await api.get('/api/v1/products')
  return {
    props: {
      products: products.data
    }
  }
}

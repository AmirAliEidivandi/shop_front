import React from 'react'
import ProductItem from './ProductItem'

export default function ProductsList () {
  return (
        <section className="section-gap">
            <div className="container">
                <div className="row justify-content-center">
                    {[1, 2, 3, 4, 5].map((number, index) => <ProductItem key={index} />)}
                    <div className="col-md-12 text-center mt-4">
                        <a href="#" className="btn btn-pill btn-theme">
                            ادامه خواندن
                        </a>
                    </div>
                </div>
            </div>
        </section>
  )
}

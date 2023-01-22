import React from 'react'

export default function ProductItem () {
  return (
      <div className="col-md-4">
          <div className="card border-0 mb-4 box-hover">
              <div className="position-relative">
                  <div className="ft-tag ft-inside-tr">ویژه</div>
                  <img className="card-img-top" src="/static/assets/img/shop/shop-img9.jpg" alt="card image" />
              </div>
              <div className="card-body py-4 text-center">
                  <h6 className="mb-2 font-size-16">
                      <a href="#">نام عنوان محصول</a>
                  </h6>
                  <div className="price mb-3">
                      <del className="text-muted mr-2">
                          <span className="font-size-14 h6">49.000 تومان</span>
                      </del>
                      <span className="h6">تومان32.00</span>
                  </div>
                  <a href="#" className="btn btn-sm btn-pill btn-outline">
                      افزودن به سبد خرید
                  </a>
              </div>
          </div>
      </div>
  )
}

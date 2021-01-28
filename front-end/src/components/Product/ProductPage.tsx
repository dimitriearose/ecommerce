import { Helmet } from "react-helmet"
import "ProductPage.scss"

const ProductPage = () => {
  return (
    <div className='productpage'>
      <Helmet>
        <title>Up</title>
      </Helmet>
      <h1>product</h1>
    </div>
  )
}

export default ProductPage

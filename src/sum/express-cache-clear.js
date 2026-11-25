// Fetch images from a remote server and cache when no error
const imagesCache = {}
const fetchImages = async (productId) => {
    if (imagesCache[productId]) {
        return imagesCache[productId]
    }

    const response = await fetch(`https://images.distribution.com/products/${productId}/images`)
    if (response.status !== 200) {
        throw new Error('Failed to fetch images')
    }

    imagesCache[productId] = response.json()
    return imagesCache[productId]
}

// get all products with images where images are fetched from a remote server
router.post('/products', async (req, res) => {
    const products = getAllProducts()

    for (const product of products) {
        product.images = await fetchImages(product.id)
    }

    res.json(products)
})


// invalidate images cache for product
router.post('/products/:productId/invalidate-images', (req, res) => {
    const productId = req.params.productId
    delete imagesCache[productId]
    res.json({ message: 'Images cache invalidated' })
})


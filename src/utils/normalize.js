import groupBy from 'lodash.groupby'

export const sum = products => products.reduce((acc, product) => acc + product.quantity, 0)

export const normalize = (products, property) => {
    const groupedByProp = groupBy(products, property)
    
    const groupTotals = Object.keys(groupedByProp)
        .map(property => ({
        	title: property,
        	quantity: sum(groupedByProp[property]),
        }))
    
    return groupTotals
}

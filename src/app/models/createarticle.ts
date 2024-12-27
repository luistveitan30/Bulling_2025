export default interface articleformartModel{
    articleCode: string
    description: string
    quantify: number | undefined
    unitprice: number
    discount: number
    subtotal: number
    tax: string
    total: number
}
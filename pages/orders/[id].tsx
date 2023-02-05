import { useRouter } from 'next/router'

const Order = () => {
    const router = useRouter()
    const { id } = router.query

    return <p>Order: {id}</p>
}

export default Order

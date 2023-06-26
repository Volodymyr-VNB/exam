import { Card, Typography, Button } from '@mui/material'
import telefonArray from 'utils/proucttelefon'
import { useContext } from 'react'
import { AppContext } from 'Container/App/App'

type Props = {
    id: number
}
const Cart = ({ id }: Props) => {
    const data = useContext(AppContext)
    const krosKurs = (val: string, price: number) => {
        let priceVal = 0
        switch (val) {
            case 'USD':
                priceVal = price * 1.07
                break

            case 'EUR':
                priceVal = price * 1

                break
            case 'UAH':
                priceVal = price * 39.8

                break
            case 'GBP':
                priceVal = price * 0.84

                break

            default:
                priceVal = price * 1

                break
        }
        return priceVal
    }

    return (
        <div>
            {telefonArray
                .filter((item) => item.id === id)
                .map(({ id, title, titleAll, val, price }) => (
                    <Card className="card row" key={id}>
                        <Typography variant="h3">{title}</Typography>
                        <Typography variant="h5" className="titleAll">
                            {titleAll}
                        </Typography>
                        <Typography variant="h5">
                            {data?.valuta!}{' '}
                            {krosKurs(data?.valuta!, Number(price)).toFixed(2)}
                        </Typography>

                        <Button
                            variant="outlined"
                            size="large"
                            onClick={() =>
                                data?.changTotal(
                                    krosKurs(data?.valuta!, Number(price))
                                )
                            }
                        >
                            Buy
                        </Button>
                    </Card>
                ))}
        </div>
    )
}
export default Cart

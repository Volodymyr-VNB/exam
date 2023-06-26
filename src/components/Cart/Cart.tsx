import { Card, Typography, Button } from '@mui/material'
import telefonArray from 'utils/proucttelefon'
import { useContext } from 'react'
import { AppContext } from 'Container/App/App'

type Props = {
    id: number
}

const Cart = ({ id }: Props) => {
    const data = useContext(AppContext)

    return (
        <div>
            {telefonArray
                .filter((item) => item.id === id)
                .map(({ id, title, titleAll, price }) => (
                    <Card className="card row" key={id}>
                        <Typography variant="h3">{title}</Typography>
                        <Typography variant="h5" className="titleAll">
                            {titleAll}
                        </Typography>
                        <Typography variant="h5">
                            {data?.valuta! + ' '}

                            {(
                                data?.krosKursKoef(data?.valuta!)! * price
                            ).toFixed(2)}
                        </Typography>

                        <Button
                            variant="outlined"
                            size="large"
                            onClick={() => data?.changTotal(Number(price))}
                        >
                            Buy
                        </Button>
                    </Card>
                ))}
        </div>
    )
}
export default Cart

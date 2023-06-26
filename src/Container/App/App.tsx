import { Typography, Button, ButtonGroup } from '@mui/material'
import './App.scss'
import Cart from 'components/Cart/Cart'
import { createContext, useState } from 'react'

type Context = {
    total: number
    changTotal: (id: number) => void
    valuta: string
}

export const AppContext = createContext<Context | null>(null)

type Props = {}
const App = (props: Props) => {
    const [total, setTotal] = useState(0)
    const [valuta, setValuta] = useState('EUR')

    const changTotal = (total: number) => {
        console.log('changTotal', total)
        setTotal((prevState) => prevState + total)
    }

    const changValuta = (valuta: string) => {
        console.log(valuta, '=valuta')
        setValuta(() => valuta)
        setTotal(() => 0)
    }

    return (
        <AppContext.Provider
            value={{ total: total, changTotal: changTotal, valuta: valuta }}
        >
            <div className="container row">
                <Typography variant="h3" component={'h1'} className="text">
                    Our shop page
                </Typography>
                <ButtonGroup
                    variant="contained"
                    aria-label="outlined primary button group"
                    className="btn row"
                >
                    <Button onClick={() => changValuta('USD')}>USD</Button>
                    <Button onClick={() => changValuta('EUR')}>EUR</Button>
                    <Button onClick={() => changValuta('UAH')}>UAH</Button>
                    <Button onClick={() => changValuta('GBP')}>GBP</Button>
                </ButtonGroup>
                <div className="row gap">
                    <Cart id={1} />
                    <Cart id={2} />
                    <Cart id={3} />
                </div>

                <Typography variant="h2">total: {total.toFixed(2)} {valuta}</Typography>
            </div>
        </AppContext.Provider>
    )
}
export default App

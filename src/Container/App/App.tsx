import { Typography, Button, ButtonGroup } from '@mui/material'
import './App.scss'
import Cart from 'components/Cart/Cart'
import { createContext, useState } from 'react'

type Context = {
    
    changTotal: (id: number) => void,
    valuta: string,
    krosKursKoef: (val: string) => number,
}

export const AppContext = createContext<Context | null>(null)

type Props = {}
const App = (props: Props) => {
    const [total, setTotal] = useState(0)

    const [valuta, setValuta] = useState('EUR')

    const changTotal = (total: number) => {
        setTotal((prevState) => prevState + total)
    }
    const krosKursKoef = (val: string) => {
        let kros
        switch (val) {
            case 'USD':
                kros = 1.07
                break

            case 'EUR':
                kros = 1
                break
            case 'UAH':
                kros = 39.8
                break
            case 'GBP':
                kros = 0.84
                break

            default:
                kros = 1
                break
        }
        return kros
    }

    const changValuta = (valuta: string) => {
        setValuta(() => valuta)
    }

    return (
        <AppContext.Provider
            value={{  changTotal: changTotal, valuta: valuta,
                krosKursKoef:krosKursKoef }}
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

                <Typography variant="h2">
                    total: {(total * krosKursKoef(valuta)).toFixed(2)} {valuta}
                </Typography>
            </div>
        </AppContext.Provider>
    )
}
export default App

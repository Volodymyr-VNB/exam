import { Typography, Button, ButtonGroup ,Paper} from '@mui/material'
import './App.scss'
import Cart from 'components/Cart/Cart'

type Props = {}
const App = (props: Props) => {
    return (
        <div className="container row">
            <Typography variant="h3" component={'h1'} className="text">
                Our shop page
            </Typography>
            <ButtonGroup
                variant="contained"
                aria-label="outlined primary button group"
                className="btn row"
            >
                <Button>USD</Button>
                <Button>EUR</Button>
                <Button>UAH</Button>
                <Button>GBP</Button>
            </ButtonGroup>
            <div className="row gap">
            
                <Cart id={1} />
                <Cart id={2} />
                <Cart id={3} />

            </div>
            <Typography variant="h2" >
                total: 2850
            </Typography>
        </div>
    )
}
export default App

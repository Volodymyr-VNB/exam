import { Card ,Typography,Button} from "@mui/material"
import telefonArray from 'utils/proucttelefon'

type Props = {
    
    id    :number
}
const Cart = ({id}: Props) => {
    
  return (
    <div>
{telefonArray.filter((item) => item.id === id) 
.map (
    ({id,title,titleAll,val,price}) => (
<Card className="card row">
            <Typography variant="h3">{title}</Typography>
            <Typography variant="h5" className="titleAll">{titleAll}</Typography>
            <Typography variant="h5">{val} {price}</Typography>

            <Button  variant="outlined" size="large">Buy</Button>
        </Card>

    )
)
        
    }    
  </div> )
}
export default Cart
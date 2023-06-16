import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CardItem = ({data}) => {
    let navigate = useNavigate()

    return (
        <>
        {
            (data)?(
                data.map(item=>{
                    return(
                    <Tooltip key={item.id} title={item.name} arrow>
                        <Card sx={{ maxWidth: 245 }} onClick={() => navigate(`${item.id}`)}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="140"
                                image={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                                alt=""
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Modified: {item.modified.replace(/-/g, '/')}
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Tooltip>
                    )
                })
            ):''
        }
        </>
    );
}

export default CardItem;
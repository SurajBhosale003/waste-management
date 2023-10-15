import Image from "../assets/images.png"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// Images
import AdminImage from "../assets/admin.png"
import WorkersImage from "../assets/worker.png"
import ViewWorkers from "../assets/workers.png"
import UpdateWork from "../assets/asignwork.png"



import "../App.css";

function AdminPage() {
  const navigate = useNavigate();
  return (
    <>
    <center><h1>Dr. Daulatrao Aher Engineering College, Karad</h1><img src={Image} alt="College Image"/></center>
    <div className="container">
      <div className="child-container">
      <Card sx={{ maxWidth: 345 }} onClick={()=>{ navigate('/register') }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={AdminImage}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Add Admin
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Add Admin and provide the information to save in Database.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </div>
      <div className="child-container">
      <Card sx={{ maxWidth: 345 }}  onClick={()=>{ navigate('/update-workers')}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={WorkersImage}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Add Workers
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Add Multiple workers to assign work.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </div>
      <div className="child-container">
      <Card sx={{ maxWidth: 345 }}  onClick={()=>{ navigate('/view-workers')}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={ViewWorkers}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            View Workers
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Worker list
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </div>
      <div className="child-container">
      <Card sx={{ maxWidth: 345 }}  onClick={()=>{ navigate('/assign-work')}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={UpdateWork}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Update Work
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Update and Assign Work to the workers.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </div>
    </div>

    </>
  )
}

export default AdminPage
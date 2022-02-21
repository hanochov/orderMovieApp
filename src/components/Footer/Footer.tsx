
import { useDispatch, useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  const dispatch = useDispatch();
  return (
    <div
      style={{
        //position: "fixed",
        left: 0,
        bottom: 0,
        right: 0,
      }}
    >
      <Card className="text-center bg-dark text-white" >
        <Card.Header>Cinema Planet</Card.Header>
        <Card.Body>
          <Card.Title>Carlebach Street 65 Tel Aviv</Card.Title>
          <Card.Text>Website developed by Vladi Hanochov , Tel - 054-9911-376</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />

        </Card.Footer>
      </Card>
    </div>
  );
};

export default Footer;

import { useDispatch, useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import FavoritesList from "./Favorites/FavoritesList";
import HistoryList from "./History/HistoryList";
import Stack from "@mui/material/Stack";
const FavoritesAndHistory = () => {
  const dispatch = useDispatch();
  return (

      <Stack
        sx={{ minHeight: "80vh" }}
      >
      <Row className="mb-2 mt-2">
      <FavoritesList />
      </Row>
      <Row className="mb-2 mt-2">
      <HistoryList />
      </Row>

      </Stack>
  );
};

export default FavoritesAndHistory;

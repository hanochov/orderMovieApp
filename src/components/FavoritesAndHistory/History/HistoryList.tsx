
import { useDispatch, useSelector } from "react-redux";
import HistoryItem from "./HistoryItem";
import List from "@mui/material/List";
import Col from "react-bootstrap/Col";

import Order_O from "../../../models/order";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
const HistoryList = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state: any) => state.order.orders);
  return (
    <div>
      {!movies.length && (
        <Alert severity="info">You have no orders in the history list — check it out!</Alert>
      )}
      {movies.length && <Stack
        justifyContent="center"
        alignItems="center"
        direction="row"
        spacing={1}
        sx={{ backgroundColor: "#E5F6FD", borderRadius: "50px" }}
      >
        <h3>HISTORY ORDER LIST</h3>
      </Stack>}
      <Stack
        justifyContent="center"
        alignItems="center"
        direction="row"
        spacing={1}
      >
        <List sx={{ width: "100%", marginBottom: "2px" }}>
          {movies.map((movie: Order_O) => (
            <Col key={movie.id}>
              <HistoryItem
                key={movie.id}
                adult={movie.adult}
                backdrop_path={movie.backdrop_path}
                genre_ids={movie.genre_ids}
                id={movie.id}
                original_language={movie.original_language}
                original_title={movie.original_title}
                overview={movie.overview}
                popularity={movie.popularity}
                poster_path={movie.poster_path}
                release_date={movie.release_date}
                title={movie.title}
                video={movie.video}
                vote_average={movie.vote_average}
                vote_count={movie.vote_count}
                orderDate={movie.orderDate}
              />
            </Col>
          ))}
        </List>
      </Stack>
    </div>
  );
};

export default HistoryList;

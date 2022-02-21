import { useDispatch, useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import MovieList from "./MovieList";
import MoviePaging from "./MoviePaging";

const Movies = () => {
  return (
    <div>
      <Row>
        <MovieList />
      </Row>
      <Row className="mb-3 mt-3">
        <MoviePaging />
      </Row>
    </div>
  );
};

export default Movies;

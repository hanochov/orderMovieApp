
import { useDispatch, useSelector } from "react-redux";
import { moviesActions } from "../../store/movies-slice";
import Container from "react-bootstrap/Container";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const MoviePaging = () => {
  const dispatch = useDispatch();
  const totalPages = useSelector((state: any) => state.movies.totalPages);
  const displayedPage = useSelector((state: any) => state.movies.displayedPage);

  const handleChange = (event: any, value: number) => {
    dispatch(moviesActions.setDisplayedPage(value));
  };

  return (
    <div>
      <Container>
        <Stack
          justifyContent="center"
          alignItems="center"
          direction="row"
          spacing={1}

        >
          <Pagination
            count={totalPages}
            variant="outlined"
            color="secondary"
            page={displayedPage}
            shape="circular"
            onChange={handleChange}
            size="medium"
            sx={{backgroundColor:"white",padding: "10px",borderRadius:"50px"}}
          />
        </Stack>
      </Container>
    </div>
  );
};

export default MoviePaging;

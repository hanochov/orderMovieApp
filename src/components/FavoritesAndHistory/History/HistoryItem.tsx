import { useDispatch, useSelector } from "react-redux";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import React from "react";

const HistoryItem: React.FC<{
  key: number;
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  orderDate: string;
}> = (props) => {
  const dispatch = useDispatch();
  return (
    <div>
      <ListItem alignItems="flex-start" sx={{ backgroundColor: "white"}}>
        <ListItemAvatar>
          <Avatar
            alt="Remy Sharp"
            src={`https://image.tmdb.org/t/p/w500${props.poster_path}`}
          />
        </ListItemAvatar>
        <ListItemText
          primary={props.title}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Order Date
              </Typography>
              {" — " + props.orderDate}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </div>
  );
};

export default HistoryItem;

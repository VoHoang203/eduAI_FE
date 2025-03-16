import React from "react";
import { Card, CardHeader, CardMedia, CardContent, Typography, Avatar, IconButton } from "@mui/material";
import { MdFavorite, MdShare, MdMoreVert } from "react-icons/md";

const MuiPost = ({ author, avatar, image, content }) => {
  return (
    <Card sx={{ margin: "20px auto" }}>
      <CardHeader
        avatar={<Avatar src={avatar} />}
        action={<IconButton><MdMoreVert /></IconButton>}
        title={author}
        subheader="2 hours ago"
      />
      {image && <CardMedia component="img"  className={"object-fit: contain"} image={image} alt="Post image" />}
      <CardContent>
        <Typography variant="body1">{content}</Typography>
      </CardContent>
      <CardContent>
        <IconButton><MdFavorite color="error" /></IconButton>
        <IconButton><MdShare /></IconButton>
      </CardContent>
    </Card>
  );
};

export default MuiPost;
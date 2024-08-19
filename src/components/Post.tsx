import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";

interface PostProps {
  avatarBgColor: string;
  avatarLabel: string;
  title: string;
  subheader: string;
  image: string;
  description: string;
}

const Post = ({ avatarBgColor, avatarLabel, title, subheader, image, description }: PostProps) => {
  return (
    <Card sx={{ margin: "10px 0", padding: 1 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: avatarBgColor }} aria-label="pet">
            {avatarLabel}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={title}
        subheader={subheader}
      />
      <CardMedia
        component="img"
        height="20%"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }} />} />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;

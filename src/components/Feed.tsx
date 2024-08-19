import { Box } from "@mui/material";
import Post from "./Post";

const Feed = () => {
  return (
    <Box
      flex={4}
      sx={{
        display: "block",
        maxWidth: { xs: "95%", sm: "80%", md: "60%" },
        padding: { xs: "0 10px", sm: "0 20px", md: "0 40px" },
      }}
    >
      <Post
        avatarBgColor="blue"
        avatarLabel="L"
        title="Luna the Labrador"
        subheader="Adopted: March 21, 2022"
        image="https://images.wagwalkingweb.com/media/daily_wag/blog_articles/hero/1670938235.1927571/fun-facts-about-labrador-retrievers.jpg"
        description="Luna is a playful and loyal Labrador who loves spending time with her family. She enjoys long walks, playing fetch, and is great with kids."
      />
      <Post
        avatarBgColor="green"
        avatarLabel="M"
        title="Milo the Beagle"
        subheader="Adopted: July 11, 2021"
        image="https://www.dogster.com/wp-content/uploads/2019/11/Beagle-dog-standing-on-a-field_Artyom-Gantsev_Shutterstock.jpg"
        description="Milo is a curious and friendly Beagle who loves exploring new places. He is very energetic and loves to play with other dogs."
      />
      <Post
        avatarBgColor="red"
        avatarLabel="C"
        title="Charlie the Golden Retriever"
        subheader="Adopted: May 15, 2019"
        image="https://images.saymedia-content.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTc0MDk2MzYxNjM1OTgwODY2/what-you-should-know-about-owning-a-golden-retriever.jpg"
        description="Charlie is a gentle and loving Golden Retriever who enjoys relaxing at home. He is very affectionate and loves to cuddle."
      />
      <Post
        avatarBgColor="purple"
        avatarLabel="B"
        title="Bella the Border Collie"
        subheader="Adopted: August 8, 2020"
        image="https://media-be.chewy.com/wp-content/uploads/2021/04/15160416/Border-Collie_Featured-Image-1024x615.jpg"
        description="Bella is a smart and energetic Border Collie who loves learning new tricks. She is very active and enjoys agility training."
      />
      <Post
        avatarBgColor="orange"
        avatarLabel="R"
        title="Rocky the Rottweiler"
        subheader="Adopted: October 10, 2018"
        image="https://www.dogster.com/wp-content/uploads/2024/03/rottweiler-standing_Ricantimages_Shutterstock.jpg"
        description="Rocky is a protective and loyal Rottweiler who takes care of his family. He is brave and loves to be the guardian of the house."
      />
    </Box>
  );
};

export default Feed;

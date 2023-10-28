import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ZoomInIcon from "@mui/icons-material/ZoomIn";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
  },
  {
    img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
    title: "Candle",
  },
  {
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "Laptop",
  },
  {
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Doors",
  },
  {
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
    title: "Storage",
  },
  {
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Coffee table",
  },
  {
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds",
  },
];

const WovenImageList = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#ffffff", // Set a white background
        overflow: "hidden", // Remove scroll bars
      }}
    >
      <ImageList
        variant="masonry"
        cols={4}
        gap={20}
        sx={{ maxWidth: "90%", overflow: "hidden" }}
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            sx={{
              overflow: "hidden",

              borderRadius: "10px",
              transition: "transform 0.8s",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          >
            <div className="rounded-md">
              <img
                srcSet={`${item.img}?w=300&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=300&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                sx={{
                  width: "100%",
                  borderRadius: "50%", // Make the images rounded
                  height: "100%",
                  margin: "4px",

                  // objectFit: "cover",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.05), margin 0.9s",
                    margin: "8px",
                  },
                }}
              />
            </div>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default WovenImageList;

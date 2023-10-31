import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ZoomInIcon from "@mui/icons-material/ZoomIn";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6",
    title: "pic1",
  },
  {
    img: "https://images.unsplash.com/photo-1576671081837-49000212a370",
    title: "pic2",
  },
  {
    img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88",
    title: "pic3",
  },
  {
    img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
    title: "pic4",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1682145146623-340d10b9b85f",
    title: "pic5",
  },
  {
    img: "https://images.unsplash.com/photo-1603843722974-3a4031f9f97c",
    title: "pic6",
  },
  {
    img: "https://images.unsplash.com/photo-1624957485502-cd76eb9ac7fe",
    title: "pic7",
  },
  {
    img: "https://images.unsplash.com/photo-1486825586573-7131f7991bdd",
    title: "pic8",
  },
  {
    img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69",
    title: "pic9",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1661962958582-e30be4c3a2aa",
    title: "pic10",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1664475867786-2a03b1b41f2c",
    title: "pic11",
  },
  {
    img: "https://images.unsplash.com/photo-1624957485490-87d607854977",
    title: "pic12",
  },
  {
    img: "https://images.unsplash.com/photo-1543709533-c032159da7b0",
    title: "pic13",
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

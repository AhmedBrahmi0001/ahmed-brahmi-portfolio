import { Box, IconButton, Stack } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const MySocialIcons = () => {
  const handleRedirect = (url: string) => {
    window.open(url, "_blank"); // Open link in a new tab
  };

  return (
    <Box>
      <Stack direction="row" spacing={2}>
        <IconButton
          onClick={() =>
            handleRedirect(
              "https://www.linkedin.com/in/ahmed-brahmi-307aba257/",
            )
          }
        >
          <LinkedInIcon
            sx={{
              fontSize: 30,
              color: "text.secondary",
              "&:hover": { color: "primary.main" },
            }}
          />
        </IconButton>
        <IconButton
          onClick={() => handleRedirect("https://github.com/AhmedBrahmi0001")}
        >
          <GitHubIcon
            sx={{
              fontSize: 30,
              color: "text.secondary",
              "&:hover": { color: "primary.main" },
            }}
          />
        </IconButton>
        <IconButton
          onClick={() =>
            handleRedirect("https://www.facebook.com/ahmedbrahmi287/")
          }
        >
          <FacebookIcon
            sx={{
              fontSize: 30,
              color: "text.secondary",
              "&:hover": { color: "primary.main" },
            }}
          />
        </IconButton>
        <IconButton
          onClick={() =>
            handleRedirect("https://www.instagram.com/ahmed.b998/")
          }
        >
          <InstagramIcon
            sx={{
              fontSize: 30,
              color: "text.secondary",
              "&:hover": { color: "primary.main" },
            }}
          />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default MySocialIcons;

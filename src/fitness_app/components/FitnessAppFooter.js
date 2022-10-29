import {
  LocationOnOutlined,
  MailOutline,
  PhoneOutlined,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  Link as Ln,
  List,
  ListItem,
  ListItemIcon,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

import FacebookIcon from "../social_media_icon/facebook.png";
import InstagramIcon from "../social_media_icon/instagram.png";
import LinkedInIcon from "../social_media_icon/linkedin.png";
import TwitterIcon from "../social_media_icon/twitter.png";
import YoutubeIcon from "../social_media_icon/youtube.png";

const SocialMediaIcon = ({ icon, alt }) => {
  return (
    <Ln
      sx={{
        cursor: "pointer",
        transition: "0.2s",
        "&:hover": {
          opacity: "0.9",
        },
        "&:active": {
          transform: "scale(0.95)",
        },
      }}
    >
      <img
        alt={alt}
        src={icon}
        width="20px"
        style={{
          margin: "0 8px",
        }}
      />
    </Ln>
  );
};

const FooterListItemSection = ({ heading, listitems }) => {
  return (
    <Box sx={{ width: "120px" }}>
      <Typography
        variant="subtitle1"
        component={"h2"}
        fontWeight="500"
        fontFamily="Poppins"
        color="rgb(22 120 242)"
      >
        {heading}
      </Typography>
      <List>
        {listitems.map((listitem) => (
          <FooterListItem
            title={listitem.title}
            key={listitem.title}
            href={listitem.href}
          >
            {listitem?.icon}
          </FooterListItem>
        ))}
      </List>
    </Box>
  );
};

const FooterListItem = ({ title, children, href }) => {
  return (
    <ListItem sx={{ paddingLeft: "0" }}>
      {children && (
        <ListItemIcon sx={{ minWidth: "auto", marginRight: "8px" }}>
          {children}
        </ListItemIcon>
      )}
      <Link to={href}>
        <Typography
          variant="subtitle2"
          fontWeight="300"
          sx={{ userSelect: "none" }}
        >
          {title}
        </Typography>
      </Link>
    </ListItem>
  );
};
const Footer = () => {
  const footerSections = [
    {
      heading: "Product",
      listitems: [
        { title: "Features" },
        { title: "Pricing" },
        { title: "Case Studies" },
        { title: "Reviews" },
        { title: "Updates" },
      ],
    },
    {
      heading: "Company",
      listitems: [
        { title: "About", href: "/about" },
        { title: "Contact Us", href: "/contact-us" },
        { title: "Careers" },
        { title: "Culture" },
        { title: "Blog" },
      ],
    },
    {
      heading: "Support",
      listitems: [
        { title: "Getting Started" },
        { title: "Help Center" },
        { title: "Server Status" },
        { title: "Report a Bug" },
        { title: "Chat Support" },
      ],
    },
    {
      heading: "Contact Us",
      listitems: [
        {
          title: "contactus@company.com",
          icon: <MailOutline color="primary" />,
        },
        { title: "(919) 687-5982", icon: <PhoneOutlined color="primary" /> },
        {
          title: "794, Bhopal, Madhya Pradesh, 427002",
          icon: <LocationOnOutlined color="primary" />,
        },
      ],
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        padding: "60px 60px 20px 60px",
        background: "white",
        borderRadius: "24px",
      }}
    >
      <Stack
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "auto",
            sm: "auto auto auto",
            md: "auto auto auto auto auto",
          },
        }}
      >
        <Box sx={{ width: "200px" }}>
          <img
            width="60px"
            style={{ margin: "8px auto" }}
            src="/fitness/fitness_logo2.png"
            alt="Footer App Logo"
          />
          <Typography
            variant="h5"
            component="h1"
            fontWeight="bold"
            style={{
              background:
                "linear-gradient(96.14deg, #3A8EF6 -10.84%, #6F3AFA 196.74%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "24px",
            }}
          >
            Health&Fitness
          </Typography>
          <Typography variant="caption" component="p" color="#6F6C90">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
          </Typography>
          <Stack direction="row" width="100%" marginY="20px">
            <SocialMediaIcon icon={FacebookIcon} alt="facebook" />
            <SocialMediaIcon icon={TwitterIcon} alt="twitter" />
            <SocialMediaIcon icon={InstagramIcon} alt="instagram" />
            <SocialMediaIcon icon={LinkedInIcon} alt="linkedin" />
            <SocialMediaIcon icon={YoutubeIcon} alt="youtube" />
          </Stack>
        </Box>
        {footerSections.map((footers) => (
          <FooterListItemSection
            key={footers.heading}
            heading={footers.heading}
            listitems={footers.listitems}
          />
        ))}
      </Stack>
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: { md: "space-between" },
          flexWrap: "wrap",
          height: "40px",
          alignItems: "center",
          padding: "0 10px",
        }}
      >
        <Typography variant="caption" marginY={{ xs: "12px" }}>
          Copyright &copy; 2022
        </Typography>
        <Stack
          direction="row"
          sx={{
            flexWrap: "wrap",
            gap: 2,
            marginBottom: {
              xs: "20px",
            },
          }}
          divider={<Divider />}
        >
          <Typography variant="caption">All Right Reserved</Typography>
          <Link>
            <Typography variant="caption">Terms and Conditions</Typography>
          </Link>
          <Link>
            <Typography variant="caption">Privacy Policy</Typography>
          </Link>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;

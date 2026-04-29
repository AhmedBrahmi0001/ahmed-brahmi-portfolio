import { Box, Grid, Container } from '@mui/material'
import {
  GridStyled,
  BoxStyled,
  ImgDeveloper,
  BoxGlobal,
  AccentGlow,
  ImageContainer,
  GradientBackground,
  DecorativeBorder,
} from 'pages/Home/Home.style'
import ImgMeriam from 'assets/images/ahmed-brahmi.jpeg'
import TextDescriptionDeveloper from 'features/TextDescriptionDeveloper/TextDescriptionDeveloper'
import MySocialIcons from 'features/MySocialIcons/MySocialIcons'
import ProjectsPage from 'pages/ProjectsPage/ProjectsPage'
import Contact from 'features/Contact/Contact'
import Skills from 'features/Skills/Skills'
import Experience from 'features/Experience/Experience'

import SEO from 'components/SEO/SEO'

function Home() {
  return (
    <BoxGlobal>
      <SEO
        title="Ahmed Brahmi - Développeur Full Stack | React, Node.js, React Native"
        description="Portfolio de Ahmed Brahmi, développeur Full Stack spécialisé en React, React Native et Node.js. Découvrez mes projets en microservices, e-commerce, applications mobiles et systèmes temps réel."
        keywords="Ahmed Brahmi, Full Stack Developer, React Developer, Node.js, React Native, Microservices, Kafka, Portfolio, Web Development, Mobile Development, Tunisia Developer"
      />
      <Container maxWidth="xl">
        {/* Hero Section */}
        <BoxStyled
          sx={{
            minHeight: "90vh",
            display: "flex",
            alignItems: "center",
            paddingTop: "2rem",
          }}
          id="aboutMeId"
        >
          <GridStyled container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <TextDescriptionDeveloper />
              <Box sx={{ mt: 4 }}>
                <MySocialIcons />
              </Box>
            </Grid>

            <GridStyled item xs={12} md={6} isCenter={false}>
              <ImageContainer>
                <GradientBackground />
                <DecorativeBorder />

                <ImgDeveloper
                  src={ImgMeriam}
                  alt="Meriam - Developer"
                  style={{ position: "relative", zIndex: 2 }}
                />

                <AccentGlow />
              </ImageContainer>
            </GridStyled>
          </GridStyled>
        </BoxStyled>

        {/* Skills Section */}
        <Skills />

        {/* Experience Section */}
        <Experience />

        {/* Projects Section */}
        <ProjectsPage />

        {/* Contact Section */}
        <Contact />
      </Container>
    </BoxGlobal>
  );
}
export default Home

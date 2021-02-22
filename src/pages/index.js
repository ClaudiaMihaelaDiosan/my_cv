import React from 'react';
import { graphql } from 'gatsby'

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import About from '@sections/About';
import Achievements from '@sections/Achievements';
import Skills from '@sections/Skills';
import ContactForm from '@sections/Contact';


const IndexPage = ({data}) => {
  if (!data) return null
  const document = data.allPrismicHeader.edges[0].node.data.header[0]
  const aboutDocument = data.allPrismicAbout.nodes[0].data
  const achievementsDocument = data.allPrismicAchievements.edges[0].node.data
  const skillsDocument = data.allPrismicSkills.edges[0].node.data

 

  const headerContent = {
    profile_image: document.profile_image,
    birthday: document.birthday,
    email: document.email,
    location: document.location,
    name: document.name,
    phone_number: document.phone_number,
  }

  const aboutContent = {
    about_me_title: aboutDocument.about_me[0].about_me_title,
    about_me_content: aboutDocument.about_me[0].about_me_content,
    about_me_img: aboutDocument.about_me[0].about_me_img,
    education_img: aboutDocument.education[0].education_img,
    education_title: aboutDocument.education[0].education_title,
    education_content: aboutDocument.education[0].education_content,
    experience_title: aboutDocument.experience[0].experience_title,
    experience_content: aboutDocument.experience[0].experience_content,
    experience_img: aboutDocument.experience[0].experience_img
  }

  const achievementsContent = {
    achievements_img: achievementsDocument.achievements_img,
    achievements_link: achievementsDocument.achievements_link,
    achievements_title: achievementsDocument.achievements_title

  }

  const skillsContent = {
    skills_title: skillsDocument.skills_title,
    skills_img: skillsDocument.skills_img,
    skill: skillsDocument.skill
  }

  console.log(skillsContent.skills_img)
  console.log(skillsContent.skill)
 


  return (
    <Layout>
    <Navbar />
    <Header headerContent={headerContent}/>
    <About aboutContent={aboutContent}/>
    <Achievements achievementsContent={achievementsContent} />
    <Skills skillsContent={skillsContent} />
    <ContactForm/>
  </Layout>
  )

}

  
export const query = graphql`
query Header {
  allPrismicAbout {
    nodes {
      data {
        about_me {
          about_me_content {
            text
          }
          about_me_img {
            url
            alt
          }
          about_me_title {
            text
          }
        }
        education {
          education_content {
            text
          }
          education_img {
            alt
            url
          }
          education_title {
            text
          }
        }
        experience {
          experience_content {
            text
          }
          experience_img {
            alt
            url
          }
          experience_title {
            html
            text
          }
        }
      }
    }
  }
  allPrismicHeader {
    edges {
      node {
        data {
          header {
            profile_image {
              url
            }
            birthday {
              text
            }
            email {
              text
            }
            location {
              text
            }
            name {
              text
            }
            phone_number {
              text
            }
          }
        }
      }
    }
  }
  allPrismicAchievements {
    edges {
      node {
        data {
          achievements_img {
            alt
            url
          }
          achievements_link {
            link {
              url
            }
            link_img {
              alt
              url
            }
            link_label {
              text
            }
            description {
              text
            }
          }
          achievements_title {
            text
          }
        }
      }
    }
  }
  allPrismicSkills {
    edges {
      node {
        data {
          skill {
            skill_img {
              alt
              url
            }
            skill_title {
              text
            }
          }
          skills_img {
            alt
            url
          }
          skills_title {
            text
          }
        }
      }
    }
  }
}
`






export default IndexPage;

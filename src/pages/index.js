import React from 'react';
import { graphql } from 'gatsby'

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import About from '@sections/About';
import Brands from '@sections/Brands';
import Team from '@sections/Team';
import Faq from '@sections/Faq';
import Footer from '@sections/Footer';

const IndexPage = ({data}) => {
  if (!data) return null
  const document = data.allPrismicHeader.edges[0].node.data.header[0]
  const aboutDocument = data.allPrismicAbout.edges[0].node.data

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

  
  return (
    <Layout>
    <Navbar />
    <Header headerContent={headerContent}/>
    <About aboutContent={aboutContent}/>
    <Brands />
    <Team />
    <Faq />
    <Footer />
  </Layout>
  )

}

  
export const query = graphql`
query Header {
  allPrismicAbout {
    edges {
      node {
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
              url
              alt
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
              text
            }
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
}
`






export default IndexPage;

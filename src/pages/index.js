import React from 'react';

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
  console.log(document.profile_image)

  const headerContent = {
    profile_image: document.profile_image,
    birthday: document.birthday,
    email: document.email,
    location: document.location,
    name: document.name,
    phone_number: document.phone_number,
  }

  return (
    <Layout>
    <Navbar />
    <Header headerContent={headerContent} />
    <About />
    <Brands />
    <Team />
    <Faq />
    <Footer />
  </Layout>
  )

}

  export const query = graphql`
  query Header {
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

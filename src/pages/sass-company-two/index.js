import React from "react";
import Layout from "@layout/Layout";
import Footer from "@layout/Footer/Footer";
import Navbar from "@layout/Header/Navbar";
import ReviewOne from "@components/review/ReviewOne";
import LatestBlog from "@components/blogs/LatestBlog";
import SupportOne from "@components/support/SupportOne";
import ServiceOne from "@components/services/ServiceOne";
import IntegrationOne from "@components/integration/IntegrationOne";
import TestimonialOne from "@components/testimonial/TestimonialOne";
import WorkProcessTwo from "@components/workprocess/WorkProcessTwo";
import HeroSectionThree from "@components/hero-section/HeroSectionThree";
import Features from '@components/features/FeatureOne'
import Promo from '@components/promo/Promo'
import FeatureImgContentOne from '@components/feature-img-content/FeatureImgContentOne'
import WorkProcessOne from "@components/workprocess/WorkProcessOne";

const SassCompanyTwoHome = () => {
  return (
    <Layout>
      <Navbar />
      <HeroSectionThree />
      <ReviewOne />
      <ServiceOne />
      <WorkProcessTwo />
      <TestimonialOne />
      <IntegrationOne />
      {/* <LatestBlog /> */}
      <Features/>
      <FeatureImgContentOne/>
      <WorkProcessOne/>
      <Promo/>
      {/* <SupportOne className /> */}
      <Footer footerLight />
    </Layout>
  );
};

export default SassCompanyTwoHome;

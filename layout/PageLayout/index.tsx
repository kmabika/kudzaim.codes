import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Footer from 'components/Footer';
import Head from "components/Header";
import NavBar from "components/NavBar";
import { PageLayoutType } from 'types/interfaces';
import { PageLayoutContainer, PageMainContent } from './styled';

const PageLayout = ({ children, description, image, title }: PageLayoutType) => {
  const [currentURL, setCurrentURL] = useState('https://kmabika.me/');
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentURL(
        `${window.location.protocol}//${window.location.host}${window.location.pathname}`
      );
    }
  }, []);
  return (
    <PageLayoutContainer>
      <Head
        title={title ?? 'Kudzai Mabika • Portfolio'}
        description={description ?? 'Kudzai Mabika • Portfolio'}
        locale={`${router.locale}`}
        currentUrl={currentURL}
        image={`${image}`}
      />
      <NavBar />
      <PageMainContent>{children}</PageMainContent>
      <Footer />
    </PageLayoutContainer>
  );
};

export default PageLayout;

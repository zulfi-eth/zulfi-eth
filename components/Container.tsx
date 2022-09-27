import { css, styled } from 'stitches.config';
import { Box, Grid } from './Layout';
import { Navbar } from './Navbar';
import { Meta, Seo } from './Seo';
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav';
import { Link } from './Link';
import { Text } from './Text';
import { srOnly } from '@/styles/srOnly';

interface ContainerProps extends Meta {
  children: React.ReactNode;
  clicked?: any;
  toggleClicked?: any;
}

const skipNav = css({
  '&[data-reach-skip-link]': {
    position: 'absolute',
    top: '$10 ',
    left: '$64',
    p: '$4',
    borderRadius: '$md',
    textDecoration: 'none',
    transform: 'translateX(-500%)',
    transition: 'transform 500ms',
  },
  '&[data-reach-skip-link]:focus': {
    transform: 'translateX(100%)',
    color: '$loContrast',
  },
  '&[data-reach-skip-link]:visited': {
    color: '$loContrast',
  },
});

const Header = styled('header');
const Main = styled('main');
const Footer = styled('footer');

export const Container = ({
  clicked,
  toggleClicked,
  children,
}: ContainerProps) => {
  return (
    <Box
      css={{
        '@bp1': {
          p: '$3',
        },
        '@bp2': {
          p: '$6',
        },
        '@bp3': {
          p: '$8',
        },
        '@bp4': {
          pt: '$16',
        },
        '@bp5': {
          pt: '$32',
        },
        backgroundColor: '$AppBg',
      }}
    >
      <Seo />
      <SkipNavLink className={skipNav()} />
      <Grid
        css={{
          maxWidth: '962px',
          margin: 'auto',
          gridTemplateRows: 'auto 1fr auto',
          height: '100%',
        }}
      >
        <Header>
          <Navbar clicked={clicked} toggleClicked={toggleClicked} />
        </Header>
        <SkipNavContent className={srOnly()} />
        <Main>{children}</Main>
        <Footer css={{ p: '$5' }}>
          <Text css={{ textAlign: 'center' }}>
          Copyright 2021 © All rights Reserved. Zulfi
          </Text>
        </Footer>
      </Grid>
    </Box>
  );
};

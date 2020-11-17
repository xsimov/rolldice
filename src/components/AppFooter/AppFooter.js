import React from 'react';
import { Box, Link } from '@chakra-ui/react';
import { FiExternalLink } from 'react-icons/fi';

const AppFooter = () => (
  <Box
    position="fixed"
    bottom="0"
    flex="1"
    width="100%"
    padding={2}
    bg="black"
    color="white"
  >
    All credit for the images goes to{' '}
    <Link href="https://bitbucket.org/Cenix/dice_roller/src/master/" isExternal>
      Cenix's dice roller repo <FiExternalLink />
    </Link>
  </Box>
);

export { AppFooter };

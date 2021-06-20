import { Box, Container, Flex, Heading, Select, Text } from '@chakra-ui/react';
import { useState } from 'react';

function PageTitle() {
  const [pageTitleData, setPageTitleData] = useState({
    label: 'All Products',
    subtitle: 'A 360° look at Lumin',
  });

  const populateTitle = (e) => {
    const selectedFilter = e.target.options[e.target.selectedIndex];

    setPageTitleData({
      label: selectedFilter.label,
      subtitle: selectedFilter.dataset.subtitle,
    });
  };

  return (
    <Container
      px={{ base: '1.5rem', md: '2.5rem' }}
      pt={{ base: '4rem', lg: '5rem' }}
      pb={{ base: '2.5rem', lg: '6.5rem' }}
    >
      <Flex
        alignItems={{ base: 'flex-start', lg: 'center' }}
        flexDirection={{ base: 'column', lg: 'row' }}
        justifyContent="space-between"
      >
        <Box>
          <Heading
            as="h1"
            fontFamily="heading"
            fontSize={{ base: '1.5rem', md: '2rem', lg: '3rem' }}
            lineHeight={{ base: '1.125', lg: '1.25' }}
          >
            {pageTitleData?.label}
          </Heading>
          <Text
            as="p"
            fontSize={{ base: '.8125rem', lg: '1rem' }}
            lineHeight={{ base: '1.7', lg: '1.5' }}
            mt={{ base: '0.5rem', md: '0.75rem' }}
          >
            {pageTitleData?.subtitle}
          </Text>
        </Box>
        <Box mt={{ base: '1.5rem', lg: '0' }} w={{ base: '100%', lg: '25rem' }}>
          <Select
            defaultValue=""
            size="lg"
            bg="white"
            borderColor="gray.300"
            borderRadius={0}
            focusBorderColor="brand.500"
            h={{ base: '50px', lg: '57px' }}
            onChange={(e) => populateTitle(e)}
            _focus={{ boxShadow: 'none', borderColor: 'brand.500' }}
          >
            <option value="" disabled>
              Filter by
            </option>
            <option value="all-products" data-subtitle="A 360° look at Lumin">
              All Products
            </option>
            <option
              value="new-products"
              data-subtitle="Brand new upgrades for your routine"
            >
              New Products
            </option>
            <option value="sets" data-subtitle="Find your perfect routine">
              Sets
            </option>
            <option
              value="skincare"
              data-subtitle="Unlock your full face potential"
            >
              Skincare
            </option>
            <option
              value="hair-and-body"
              data-subtitle="Lather up with the good stuff"
            >
              Hair &amp; Body Care
            </option>
            <option value="accessories" data-subtitle="Accessories">
              Accessories
            </option>
          </Select>
        </Box>
      </Flex>
    </Container>
  );
}

export default PageTitle;

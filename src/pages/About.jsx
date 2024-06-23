import React from 'react';
import { Box, Text, Heading, VStack, Link } from '@chakra-ui/react';

const About = () => {
  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          About Procrastination Station
        </Heading>
        <Text fontSize="lg">
          Welcome to Procrastination Station, your ultimate companion in the battle against procrastination! This app is designed to help you manage your tasks efficiently and stay organized.
        </Text>
        <Text fontSize="lg">
          Whether you are a student, a professional, or just someone looking to keep track of daily chores, Procrastination Station is here to help you stay on top of your to-do list.
        </Text>
        <Text fontSize="lg">
          Our mission is to provide a simple yet powerful tool to boost your productivity and help you achieve your goals.
        </Text>
        <Text fontSize="lg">
          Thank you for choosing Procrastination Station. Happy tasking!
        </Text>
        <Link href="/" color="teal.500" textAlign="center">
          Back to Home
        </Link>
      </VStack>
    </Box>
  );
};

export default About;
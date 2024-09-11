import React, { useState } from 'react';
import { Button, useToast, Box, Text, Icon } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  const toast = useToast();

  const handleIncrement = () => {
    setCount(count + 1);
    toast({
      position: 'top-right',
      render: () => (
        <Box
          display='flex'
          flexDirection='row'
          alignItems='center'
          padding='12px 20px 12px 16px'
          gap='8px'
          background='radial-gradient(53.57% 282.15% at 2.14% 50%, rgba(116, 200, 152, 0.15) 0%, rgba(116, 200, 152, 0.03) 100%), #46474F'
          boxShadow='0px 0px 0px 1px rgba(40, 41, 50, 0.04), 0px 2px 2px -1px rgba(40, 41, 50, 0.04), 0px 4px 4px -2px rgba(40, 41, 50, 0.04), 0px 8px 8px -4px rgba(40, 41, 50, 0.06), 0px 16px 32px rgba(40, 41, 50, 0.06)'
          borderRadius='8px'
          style={{
            border: '1px solid',
            borderImage: `linear-gradient(0deg, #6F7076, #6F7076),
              radial-gradient(53.57% 282.15% at 2.14% 50%, rgba(116, 200, 152, 0.65) 0%, rgba(116, 200, 152, 0.1) 100%)`,
            borderImageSlice: 1,
          }}
        >
          <Icon
            as={CheckCircleIcon}
            width='24px'
            height='24px'
            color='#74C898'
          />
          <Text
            fontFamily='Inter'
            fontStyle='normal'
            fontWeight='500'
            fontSize='14px'
            lineHeight='16px'
            color='#FFFFFF'
          >
            Incremented. Counter is now {count + 1}
          </Text>
        </Box>
      ),
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <div>
      <Button colorScheme='green' onClick={handleIncrement}>
        +1
      </Button>
      <Text mt={4}>Counter: {count}</Text>
    </div>
  );
};

export default Counter;

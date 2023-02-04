import React from 'react'
import "./Boxe.css"
import { Heading, Image,Stack,Text,Divider,Button,ButtonGroup } from '@chakra-ui/react'
import { Card,  CardBody, CardFooter } from '@chakra-ui/react'
const Boxe = () => {
  
  return (
    <div>
        <Heading as='h3' size='lg'>Our Locations</Heading>
        <div className='boxe-stack'>
                  <Card minW='sm' maxW='sm'>
            <CardBody>
              <Image
                src='https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Sector 5</Heading>
                <Text style={{fontWeight:"500"}}>
                  This sofa is perfect for modern tropical spaces, baroque inspired
                  spaces, earthy toned spaces and for people who love a chic design with a
                  sprinkle of vintage design.
                </Text>
                
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blackAlpha'>
                  Book now
                </Button>
                <Button variant='ghost' colorScheme='blue'>
                  Click for more info
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>


          <Card minW='sm' maxW='sm'>
            <CardBody>
              <Image
                src='https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Dum Dum</Heading>
                <Text style={{fontWeight:"500"}}>
                  This sofa is perfect for modern tropical spaces, baroque inspired
                  spaces, earthy toned spaces and for people who love a chic design with a
                  sprinkle of vintage design.
                </Text>
                
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blackAlpha'>
                  Book now
                </Button>
                <Button variant='ghost' colorScheme='blue'>
                  Click for more info
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>

        </div>
        <div className='boxe-stack'>
          <Card minW='sm' maxW='sm'>
            <CardBody>
              <Image
                src='https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Baguihati</Heading>
                <Text style={{fontWeight:"500"}}>
                  This sofa is perfect for modern tropical spaces, baroque inspired
                  spaces, earthy toned spaces and for people who love a chic design with a
                  sprinkle of vintage design.
                </Text>
                
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blackAlpha'>
                  Book now
                </Button>
                <Button variant='ghost' colorScheme='blue'>
                  Click for more info
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>


          <Card minW='sm' maxW='sm'>
            <CardBody>
              <Image
                src='https://images.unsplash.com/photo-1514565131-fce0801e5785?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Chinar Park</Heading>
                <Text style={{fontWeight:"500"}}>
                  This sofa is perfect for modern tropical spaces, baroque inspired
                  spaces, earthy toned spaces and for people who love a chic design with a
                  sprinkle of vintage design.
                </Text>
                
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blackAlpha'>
                  Book now
                </Button>
                <Button variant='ghost' colorScheme='blue'>
                  Click for more info
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </div>
    </div>
  )
}

export default Boxe;
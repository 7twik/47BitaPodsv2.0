import { Heading, Image,Stack,Text,Divider,Button,ButtonGroup } from '@chakra-ui/react'
import { Card,  CardBody, CardFooter } from '@chakra-ui/react'
import React from "react";
const Carde =(props) =>{
  const [url,seturl]=React.useState("https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")
  React.useEffect(()=>{
    if (props.loc==="Baguihati")
      seturl("https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60");
    else if (props.loc==="Chinar Park")
      seturl("https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60");
      else if (props.loc==="Sector 5")
      seturl("https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60");
      else if (props.loc==="Dum Dum")
      seturl("https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60");
  },[props])
    return(
    <Card className="Boxe-card">
            <CardBody>
              <Image
                src={url}
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>
                  {props.loc}
                  </Heading>
                <Text>
                  This sofa is perfect for modern tropical spaces, baroque inspired
                  spaces, earthy toned spaces and for people who love a chic design with a
                  sprinkle of vintage design.
                </Text>
                
              </Stack>
            </CardBody>
            <Divider />
            {/* <CardFooter>
              <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue'>
                  Book now
                </Button>
                <Button variant='ghost' colorScheme='blue'>
                  Click for more info
                </Button>
              </ButtonGroup>
            </CardFooter> */}
          </Card>
    )
    }
export default Carde;
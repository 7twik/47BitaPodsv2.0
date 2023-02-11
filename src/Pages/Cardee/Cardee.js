import { Text,Divider } from '@chakra-ui/react'
import { Card,  CardBody } from '@chakra-ui/react'
import React from "react";
import "./Cardee.css";
const Cardee =() =>{
    return(
    <Card className="Boxe-card">
            <CardBody>
              {/* <Stack mt='6' spacing='3'> */}
                <Text mt='2' spacing='3'  className='card-text'>
                 Our counsellor will contact you very soon with your Booking!!!
                </Text>
                
              {/* </Stack> */}
            </CardBody>
            <Divider />
          </Card>
    )
    }
export default Cardee;
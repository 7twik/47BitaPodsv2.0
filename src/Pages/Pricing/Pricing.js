import React from "react";
import "./Pricing.css";
import {
  Heading,
  Image,
  Stack,
  Text,
  Divider,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { Card, CardBody, CardFooter } from "@chakra-ui/react";
const Pricing = () => {
  return (
    <div>
      <Heading as="h3" size="lg">
        Pricing
      </Heading>
      <div className="boxe-stack">
        <Card minW="sm" maxW="sm">
          <CardBody>
            <Image
              src="https://ideapod.in/wp-content/uploads/2022/11/daily-seats-ideapod-coworking.jpg"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Daily Seats</Heading>
              <Text style={{ fontWeight: "500" }}>
                ₹499 (Per person + taxes)
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blackAlpha">
                Enquire now
              </Button>
              <Button variant="ghost" colorScheme="blue">
                Click for more info
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>

        <Card minW="sm" maxW="sm">
          <CardBody>
            <Image
              src="https://ideapod.in/wp-content/uploads/2022/11/open-seats-ideapod-coworking.jpg"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Open Space</Heading>
              <Text style={{ fontWeight: "500" }}>
                ₹249 (Per person + taxes)
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blackAlpha">
                Enquire now
              </Button>
              <Button variant="ghost" colorScheme="blue">
                Click for more info
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </div>
      <div className="boxe-stack">
        <Card minW="sm" maxW="sm">
          <CardBody>
            <Image
              src="https://ideapod.in/wp-content/uploads/2022/11/private-cabin-ideapod-coworking.jpg"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Private Cabin</Heading>
              <Text style={{ fontWeight: "500" }}>
                ₹499 (Per person + taxes)
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blackAlpha">
                Enquire now
              </Button>
              <Button variant="ghost" colorScheme="blue">
                Click for more info
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>

        <Card minW="sm" maxW="sm">
          <CardBody>
            <Image
              src="https://ideapod.in/wp-content/uploads/2022/11/conference-room-at-ideapod-coworking.jpg"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Conference</Heading>
              <Text style={{ fontWeight: "500" }}>
                ₹699 (Per person + taxes)
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blackAlpha">
                Enquire now
              </Button>
              <Button variant="ghost" colorScheme="blue">
                Click for more info
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Pricing;

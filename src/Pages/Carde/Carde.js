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
import React, { useEffect, useState } from "react";
import "./Carde.css";
const Carde = (props) => {
  const [url, seturl] = React.useState(
    "https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
  );
  const [address, setAddress] = useState("");
  React.useEffect(() => {
    if (props.loc === "Sector 5") {
      seturl(
        "https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
      );
      setAddress("S.D.F Building,Saltlake,Kolkata");
    } else if (props.loc === "haldiram") {
      seturl(
        "https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
      );
      setAddress("Near Haldiram Bus Stop,near Kaikhali,Kolkata");
    } else if (props.loc === "Chinar Park") {
      seturl(
        "https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
      );
      setAddress("Coming Soon...");
    } else if (props.loc === "ganganagar") {
      seturl(
        "https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
      );
      setAddress("Near Dariala,Rajarhat Gopalpur");
    } else if (props.loc === "cp") {
      seturl(
        "https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
      );
      setAddress("Opposite to TVS Service Center,Chinar Park,Kolkata");
    }
  }, [props]);
  return (
    <Card className="Boxe-card">
      <CardBody>
        <Image
          src={url}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{props.loc}</Heading>
          <Text><b>Address:</b>&nbsp;{address}</Text>
        </Stack>
      </CardBody>
      <Divider />
    </Card>
  );
};
export default Carde;

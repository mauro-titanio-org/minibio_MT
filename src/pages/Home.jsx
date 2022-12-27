import { Avatar, Container, Grid, Text } from "@nextui-org/react";
import ProfilePicture from "../assets/profile_picture.png";
import { SquareIcon } from "../components/SquareIcon";
import { LINK_ICONS } from "../mock/icons";

export default function Home() {
  return (
    <Container css={{ height: "100vh", paddingInline: "$2" }}>
      <Grid.Container justify='center' css={{ paddingTop: "20vh" }}>
        <Grid
          xs={12}
          css={{ textAlign: "center", paddingBottom: "$3" }}
          justify='center'>
          <Avatar
            src={ProfilePicture}
            css={{ size: "$24" }}
            color='gradient'
            bordered
            loading='eager'
          />
        </Grid>
        <Container css={{ textAlign: "center" }}>
          <Text weight={"black"} size={"$lg"}>
            Mauro Titanio
          </Text>
          <Text size={"$sm"}>Front-end developer</Text>
        </Container>
        <Grid xs={12} justify='center'>
          {LINK_ICONS.map((icon) => (
            <Grid css={{ padding: "$5" }}>
              <SquareIcon
                icon={icon.icon}
                message={icon.message}
                link={icon.link}
              />
            </Grid>
          ))}
        </Grid>
        <Text
          size={"$sm"}
          css={{
            position: "absolute",
            top: "88%",
            maxWidth: "90%",
            textAlign: "center",
          }}>
          Actually working as a solution assistant in NTT Data Spain.
        </Text>
      </Grid.Container>
    </Container>
  );
}

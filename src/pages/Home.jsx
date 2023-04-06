import { Avatar, Container, Grid, Text } from "@nextui-org/react";
import ProfilePicture from "../assets/profile_picture.png";
import { SquareIcon } from "../components/SquareIcon";
import Wave from "../components/Wave";
import { LINK_ICONS } from "../mock/icons";

export default function Home() {
  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100%",
          overflow: "hidden",
          margin: 0,
          padding: 0,
        }}>
        <Grid.Container
          justify='center'
          alignContent='start'
          css={{
            paddingTop: "20vh",
            position: "relative",
            outline: "red 1ps solid",
          }}>
          <Grid
            xs={12}
            css={{ textAlign: "center", paddingBottom: "$3" }}
            justify='center'>
            <Avatar
              src={ProfilePicture}
              css={{ size: "$28" }}
              color='gradient'
              bordered
              loading='eager'
            />
          </Grid>
          <Grid css={{ textAlign: "center", marginBottom: "$2" }}>
            <Text weight={"black"} size={"$xl"}>
              Mauro Titanio
            </Text>
            <Text size={"$sm"}>Front-end developer</Text>
            <Text size={"$xs"}>
              Actually working as a solution analyst in NTT Data Spain.
            </Text>
          </Grid>
          <Grid xs={12} justify='center'>
            {LINK_ICONS.map((icon) => (
              <Grid css={{ padding: "$6" }}>
                <SquareIcon
                  icon={icon.icon}
                  message={icon.message}
                  link={icon.link}
                />
              </Grid>
            ))}
          </Grid>
        </Grid.Container>
        <Wave style={{ transform: "translateY(-80px)" }} />
      </div>
    </>
  );
}

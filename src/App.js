import "./App.css";
import {
  Box,
  Button,
  Collapsible,
  Heading,
  Grommet,
  Layer,
  ResponsiveContext,
  Text,
  Avatar,
  Distribution,
} from "grommet";
import { FormClose, Notification, Favorite, ContactInfo } from "grommet-icons";
import React, { useState } from "react";

const AppBar = (props) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="dark-2"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  />
);

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const theme = {
    global: {
      colors: {
        brand: "#228BE6",
        greenGoblin: "#25be86",
      },
      font: {
        family: "Roboto",
        size: "18px",
        height: "20px",
      },
    },
  };
  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Box fill>
            <AppBar>
              <Heading level="3" margin="none">
                <Text color="greenGoblin">Divot</Text>
              </Heading>
              <Button
                icon={
                  <Box direction="row" gap="small">
                    <Avatar src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80" />
                  </Box>
                }
                onClick={() => setShowSidebar(!showSidebar)}
              />
            </AppBar>
            <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
              <Distribution
                values={[
                  { value: 40, color: "dark-1" },
                  { value: 30, color: "greenGoblin" },
                  { value: 20, color: "greenGoblin" },
                  { value: 10, color: "dark-1" },
                  { value: 5, color: "greenGoblin" },
                ]}
              >
                {(value) => (
                  <Box pad="small" background={value.color} fill>
                    <Text size="large">{value.value}</Text>
                  </Box>
                )}
              </Distribution>
              {!showSidebar || size !== "small" ? (
                <Collapsible direction="horizontal" open={showSidebar}>
                  <Box
                    flex
                    width="medium"
                    background="dark-2"
                    elevation="small"
                    align="center"
                    justify="center"
                  >
                    <Text color="greenGoblin">Sidebar</Text>
                  </Box>
                </Collapsible>
              ) : (
                <Layer>
                  <Box
                    background="light-2"
                    tag="header"
                    justify="end"
                    align="center"
                    direction="row"
                  >
                    <Button
                      icon={<FormClose />}
                      onClick={() => setShowSidebar(false)}
                    />
                  </Box>
                  <Box
                    fill
                    background="light-2"
                    align="center"
                    justify="center"
                  >
                    sidebar
                  </Box>
                </Layer>
              )}
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;

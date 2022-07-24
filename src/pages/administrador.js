import React from "react";
import { HomeHeader } from "../components/styles/headers";
import { QuickInfoWrapper } from "../components/styles/globalStyles";
import { Amplify } from "aws-amplify";
import awsExports from "../aws-exports";
import { Button, Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import LayoutLlorona from "../components/LayoutLlorona";

Amplify.configure(awsExports);

function Administrador() {
  return (
    <LayoutLlorona>
      <HomeHeader />
      <Authenticator>
        {({ signOut, user }) => (
          <main>
            <p>
              Hola {user.username} no eres <b>admin</b> por favor regresa al
              inicio
            </p>
            <Button onClick={signOut}>Sign out</Button>
          </main>
        )}
      </Authenticator>
      <QuickInfoWrapper></QuickInfoWrapper>
    </LayoutLlorona>
  );
}

export default Administrador;

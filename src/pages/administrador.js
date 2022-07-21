import React from "react";
import Layout from "../components/layout";
import { HomeHeader } from "../components/styles/headers";
import { QuickInfoWrapper } from "../components/styles/globalStyles";
import { Amplify } from "aws-amplify";
import awsExports from "../aws-exports";
import { Button, Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(awsExports);

function Administrador() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default Administrador;

import React, { useState, useEffect } from "react";
import { HomeHeader } from "../components/styles/headers";
import { QuickInfoWrapper } from "../components/styles/globalStyles";
import { Amplify, I18n, Auth } from "aws-amplify";

import { Button, Container } from "react-bootstrap";
import { navigate } from "gatsby";
import {
  withAuthenticator,
  translations,
  Authenticator,
} from "@aws-amplify/ui-react";
import { Spin } from "antd";
import "@aws-amplify/ui-react/styles.css";
import LayoutLlorona from "../components/LayoutLlorona";
import LayoutAdministrador from "../components/Administrador/LayoutAdministrador";
I18n.putVocabularies(translations);
I18n.setLanguage("es");
I18n.putVocabularies({
  es: {
    Email: "Correo",
    "Sign In": "Iniciar Sesión",
    "Sign Up": "Regístrate",
    "Create Account": "Regístrate",
    "Your code is on the way. To log in, enter the code we emailed to":
      "Se envió el código de confirmación al email proporcionado.",
    "It may take a minute to arrive.": "Puede tardar unos minutos en llegar.",
    "Invalid verification code provided, please try again.":
      "Código de verificación inválido, por favor intenta de nuevo.",
    "Send code": "Enviar código",
    "Cannot reset password for the user as there is no registered/verified email or phone_number":
      "No se puede reestablecer la contraseña para el usuario ya que no se encuentra registrado/ el email no está verificado o tampoco el número de teléfono.",
  },
});

import awsExports from "../aws-exports";
Amplify.configure(awsExports);

function Administrador() {
  const [authUser, setAuthUser] = useState("");

  const fetchUser = async () => {
    const authUser = await Auth.currentAuthenticatedUser();
    setAuthUser(authUser);
  };
  useEffect(() => {
    fetchUser();
  }, []);

  if (authUser === undefined) {
    return (
      <div style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Spin />
      </div>
    );
  }

  const signOut = () => {
    Auth.signOut();
    navigate("/");
  };

  let hector = authUser?.signInUserSession?.idToken?.payload["cognito:groups"];

  if (hector === undefined) {
    return (
      <LayoutLlorona>
        <HomeHeader />
        <Container className="mt-2 mb-2">
          <p className="text-lowercase">
            Hola {authUser?.attributes?.email} no eres Admin, por favor cierra
            sesión y regresa a inicio.
          </p>

          <Button onClick={signOut} variant="warning">
            Cerrar Sesión
          </Button>
          <QuickInfoWrapper></QuickInfoWrapper>
        </Container>
      </LayoutLlorona>
    );
  }

  if (hector[0] === "Admin") {
    return (
      <LayoutLlorona>
        <HomeHeader />
        <LayoutAdministrador signOut={signOut} />

        <QuickInfoWrapper></QuickInfoWrapper>
      </LayoutLlorona>
    );
  }
}

export default withAuthenticator(Administrador);

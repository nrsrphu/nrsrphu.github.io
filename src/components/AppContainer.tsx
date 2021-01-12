import * as React from "react"
import { Helmet } from 'react-helmet';

type AppContainer = {
  children: React.ReactNode;
  title?: string;
};

export default function AppContainer(props: AppContainer) {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge;" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,600,700" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossOrigin="anonymous" />
        <title>New Rebel System Roleplay {props.title ? `| ${props.title}` : null}</title>
      </Helmet>
      <div className="application">
        {props.children}
      </div>
    </>
  );
}
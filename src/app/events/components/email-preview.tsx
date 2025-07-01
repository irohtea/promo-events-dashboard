"use client";
import { Html, Head, Font, Button, Hr, Text } from "@react-email/components";

export default function EmailPreview() {
  return (

    <Html lang="de">
      <Head>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Text>Some title</Text>
      <Hr />
      <Button href="https://example.com">Click me</Button>
    </Html>
  );
}
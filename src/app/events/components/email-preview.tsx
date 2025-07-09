"use client";

import {
  Html,
  Head,
  Font,
  Body,
  Container,
  Section,
  Img,
  Text,
  Link,
  Hr,
  Tailwind,
} from "@react-email/components";


export default function EmailPreview({ blocks }: { blocks: any[] }) {
    const renderBlock = (block: any) => {
    switch (block.type) {
      case "heading":
        return <Text dangerouslySetInnerHTML={{ __html: block.content }} />;
      case "text":
        return <Text dangerouslySetInnerHTML={{ __html: block.content }} />;
      case "list":
        return (
          <ul className="list-disc pl-4">
            {(block.content || "").split("\n").map((item: string, i: number) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
        );
      case "divider":
        return <Hr className="my-6 h-px bg-slate-400" />;
      case "section":
        return <Section className="my-4 p-4 bg-gray-100 rounded">Section</Section>;
      default:
        return null;
    }
  };
  return (
    <Html lang="en">
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
      <Tailwind>
        <Body className="bg-slate-50 font-sans text-base leading-6 text-black antialiased">
          <Container className="mx-auto w-full max-w-[600px] px-4">
            <Section className="py-8 text-center">
              <Link href="https://nobelnavigators.com/">
                <Img
                  src={`https://general-nobel.s3.us-east-1.amazonaws.com/images/Nobel+Logo.png`} 
                  alt="Nobel Logo"
                  className="mx-auto max-w-full align-middle"
                  width="150" 
                />
              </Link>
              <Text className="my-2 leading-none">&nbsp;</Text> {/* Spacer */}

            </Section>

            <Hr className="my-6 h-px bg-slate-400" />

            <Section className="rounded-md px-4 text-left">
              <Text>
                <strong>Dear [Recipient's Name],</strong>
              </Text>
            </Section>
            <Container>
              {blocks.map((block, i) => (
                <Section key={i}>{renderBlock(block)}</Section>
              ))}
            </Container>
            <Hr className="my-6 h-px bg-slate-400" />
            <Section className="text-center uppercase">
              <Text className="follow-us mb-4 text-xl font-bold text-slate-700">
                FOLLOW US
              </Text>
              <Text className="text-center">
                <Link
                  href="https://www.facebook.com/nobelcommunity/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-1 inline-block"
                >
                  <Img
                    src={`https://general-nobel.s3.us-east-1.amazonaws.com/images/Facebook_logo.png`} // Assuming you put social icons in public/static
                    alt="facebook"
                    width="32"
                    height="32"
                    className="w-8"
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/nobel-community/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-1 inline-block"
                >
                  <Img
                    src={`https://general-nobel.s3.us-east-1.amazonaws.com/images/LinkedIn+Logo.png`}
                    alt="linkedin"
                    width="32"
                    height="32"
                    className="w-8"
                  />
                </Link>
                <Link
                  href="https://www.instagram.com/nobel.community/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-1 inline-block"
                >
                  <Img
                    src={`https://general-nobel.s3.us-east-1.amazonaws.com/images/Instagram+Camera+Icon.png`}
                    alt="instagram"
                    width="32"
                    height="32"
                    className="w-8"
                  />
                </Link>
              </Text>
            </Section>

            <Section className="text-center text-gray-600">
              <Text className="mb-0">
                Want to change how you receive these emails?
              </Text>
              <Text className="mt-0">
                You can{" "}
                <Link href="#" className="text-gray-600 underline">
                  unsubscribe from this list.
                </Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
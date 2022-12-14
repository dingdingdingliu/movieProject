import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
					{/* 放置字型設定 */}
				  {/* <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400&display=swap" rel="stylesheet" /> */}
				</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument  
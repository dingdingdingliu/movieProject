import Footer from './footer'

type Props = {
  children: JSX.Element,
};

export default function DefaultLayout ({children}: Props) {
	return (
    <>
      <main>
        {children}
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
	)
}
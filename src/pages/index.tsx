import { GetStaticProps } from "next"

type HomeProps = {
  title: string
}

export default function Page() {
  return <div></div>
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  return { props: { title: "Homepage" } }
}

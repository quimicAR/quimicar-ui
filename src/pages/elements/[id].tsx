import { Section, Row, ElementHeader } from 'components'
import useDarkMode from 'hooks/use-dark-theme'
import { IElement } from 'models/element'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import { FiFileText, FiInfo } from 'react-icons/fi'
import { getElementById } from 'services/elements/get-by-id'

export const getStaticPaths: GetStaticPaths = async () => {
  let size = Array.from(Array(119).keys())
  size = size.map((size) => size + 1)

  const paths = size.map((id) => ({
    params: { id: id.toString() }
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id

  const { data } = await getElementById({ id: id as string })

  return { props: { data } }
}

const Element: NextPage<{ data: IElement }> = ({ data }) => {
  const { isDarkMode } = useDarkMode()
  const {
    name,
    summary,
    symbol,
    category,
    atomic_mass,
    appearance,
    boil,
    density,
    discovered_by,
    electron_affinity,
    electron_configuration,
    electron_configuration_semantic,
    electronegativity_pauling,
    melt,
    molar_heat,
    named_by,
    number,
    period,
    phase,
    spectral_img,
    element_img
  } = data

  const imageUrl = (number: number) => {
    const base = '/static/markers/'
    const formatedNumber = number <= 9 ? `0${number}` : number
    const finalUrl = base + formatedNumber + '.png'
    return finalUrl
  }

  return (
    <div className=" lg:w-10/12 sm:w-full">
      {/* <Image src={} /> */}
      <ElementHeader
        category={category}
        atomic_mass={atomic_mass}
        element_img={element_img}
        name={name}
        number={number}
        symbol={symbol}
      />
      <div className="flex flex-col">
        <Section
          icon={
            <FiFileText
              color={isDarkMode ? 'var(--color-light)' : 'var(--color-dark)'}
              fontSize="1.3em"
              style={{ marginRight: '0.7em' }}
            />
          }
          title="Overview"
        >
          <Row title="Atomic Number: " text={number} />
          <Row title="Atom name: " text={name} />
          <Row title="Summary:" text={summary} />
          <Row title=" Appearance:" text={appearance} />
          <Row title=" Discovered:" text={discovered_by as string} />
          <Row title=" Named by:" text={named_by} />
        </Section>

        <Section
          icon={
            <FiInfo
              color={isDarkMode ? 'var(--color-light)' : 'var(--color-dark)'}
              fontSize="1.3em"
              style={{ marginRight: '0.7em' }}
            />
          }
          title="Atomic Properties"
        >
          {spectral_img && (
            <Row
              title="Spectrum:"
              imageUrl={spectral_img}
              alt="Spectrum image of the element"
              imgHeight={50}
            />
          )}
          <Row title="State: " text={phase} />
          {/* Temperatures such as boiling points and melting points are given in
          degrees kelvin */}
          <Row title="Period: " text={period} />
          <Row title="Boil: " text={boil} measure="°K" />
          <Row title="Melt: " text={melt} measure="°K" />
          {/* molar heat in (mol*K) */}
          <Row title="Molal Heat: " text={molar_heat} measure="(mol*K)" />
          {/* Densities are given in g/l for gases and g/cm³ for solids and liquids */}
          <Row
            title="Density: "
            text={density}
            measure={phase === 'Gas' ? '(g/l)' : '(g/cm³)'}
          />
          <Row title="Electronegativity: " text={electronegativity_pauling} />
          <Row title="Electron Affinity: " text={electron_affinity} />
          <Row
            title="Electronic Configuration: "
            text={electron_configuration}
          />
          {/* Elements with a semantic electron configuration marked with a "*" mean that the electron configuration has not yet been confirmed. */}
          <Row
            title="Semantic Electronic Configuration: "
            text={electron_configuration_semantic}
          />
        </Section>

        <Section
          icon={
            <FiInfo
              color={isDarkMode ? 'var(--color-light)' : 'var(--color-dark)'}
              fontSize="1.3em"
              style={{ marginRight: '0.7em' }}
            />
          }
          title="Augmented Reality"
        >
          <Row title="See this element in A.R" />
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%'
            }}
          >
            <Image src={imageUrl(number)} alt="test" width={450} height={450} />
          </div>
        </Section>
      </div>
    </div>
  )
}

export default Element

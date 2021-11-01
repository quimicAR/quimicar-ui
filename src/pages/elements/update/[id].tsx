/* eslint-disable @typescript-eslint/no-explicit-any */
import useDarkMode from 'hooks/use-dark-theme'
import { IElement } from 'models/element'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { getElementById } from 'services/elements/get-by-id'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, ElementHeader, Input } from 'components'
import { SubmitHandler, useForm } from 'react-hook-form'
import { schema, FormData } from '../initial-state'
import Link from 'next/link'
import router from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import { updateElement } from 'services/elements/update'
import Swal from 'sweetalert2'

export const getStaticPaths: GetStaticPaths = async () => {
  let size = Array.from(Array(119).keys())
  size = size.map((size) => size + 1)

  const paths = size.map((id) => ({
    params: { id: id.toString() }
  }))

  return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id

  const element = await getElementById({ id: id as string })

  return {
    props: { elementData: element.data }
  }
}

const Update: NextPage<{ elementData: IElement }> = ({ elementData }) => {
  const { isDarkMode } = useDarkMode()
  const [element, setElement] = useState<IElement | null>(elementData)

  const { register, handleSubmit, formState, reset, setValue, watch } =
    useForm<FormData>({
      mode: 'onChange',
      resolver: yupResolver(schema)
    })

  const handleSave: SubmitHandler<FormData> = ({
    appearance,
    atomic_mass,
    boil,
    category,
    density,
    discovered_by,
    electron_affinity,
    electron_configuration,
    electron_configuration_semantic,
    element_img,
    enabled,
    melt,
    molar_heat,
    name,
    named_by,
    number,
    period,
    phase,
    source,
    spectral_img,
    summary,
    symbol,
    xpos,
    ypos
  }) => {
    updateElement({
      appearance,
      atomic_mass,
      boil,
      category,
      density,
      discovered_by,
      electron_affinity,
      electron_configuration,
      electron_configuration_semantic,
      element_img,
      enabled,
      melt,
      molar_heat,
      name,
      named_by,
      number,
      period,
      phase,
      source,
      spectral_img,
      summary,
      symbol,
      xpos,
      ypos
    })
      .then((response) => {
        if (response.status === 200) {
          Swal.fire('Success!', 'Element was updated!', 'success')
          reset()
          router.push('/elements')
        }
      })
      .catch((error: any) => {
        Swal.fire(
          'Error',
          `Error to update this element! <br> ${error.response.data.message}`,
          'error'
        )
      })
  }

  const handleCancel = () => router.push('/elements')

  const populateFields = useCallback(() => {
    console.log({ element })
    if (element !== null) {
      const {
        appearance,
        atomic_mass,
        boil,
        category,
        density,
        discovered_by,
        electron_affinity,
        electron_configuration,
        electron_configuration_semantic,
        element_img,
        enabled,
        melt,
        molar_heat,
        name,
        named_by,
        number,
        period,
        phase,
        source,
        spectral_img,
        summary,
        symbol,
        xpos,
        ypos
      } = element

      setValue('appearance', appearance)
      setValue('atomic_mass', atomic_mass)
      setValue('boil', boil)
      setValue('category', category)
      setValue('density', density)

      setValue('discovered_by', discovered_by)
      setValue('electron_affinity', electron_affinity)
      setValue('electron_configuration', electron_configuration)
      setValue(
        'electron_configuration_semantic',
        electron_configuration_semantic
      )
      setValue('element_img', element_img)

      setValue('melt', melt)
      setValue('molar_heat', molar_heat)
      setValue('name', name)
      setValue('named_by', named_by)
      setValue('number', number)

      setValue('period', period)
      setValue('phase', phase)
      setValue('source', source)
      setValue('spectral_img', spectral_img)
      setValue('symbol', symbol)

      setValue('summary', summary)
      setValue('enabled', enabled)
      setValue('xpos', xpos)
      setValue('ypos', ypos)
    }
  }, [element, setValue])

  useEffect(() => {
    populateFields()
  }, [populateFields])

  return (
    <div className="flex flex-col w-11/12 h-full items-centers">
      {/* HEADER / BREADCRUMB */}
      <div className="w-full h-20 mb-10">
        <h4 className="flex gap-2 items-center text-gray-600 text-sm mb-10">
          <Link href="/">Home</Link> {'>'}
          <Link href="/elements/">Elements</Link> {'>'}
          <span className="text-blue-500 ">Update Element</span>
        </h4>
        <h1
          className={`${
            isDarkMode ? 'text-gray-100' : 'text-gray-900'
          } text-left text-3xl`}
        >
          Update Element
        </h1>
      </div>

      {/* MAIN CONTAINER */}
      <div className="flex flex-col">
        <div className="-my-2 sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div
              className={`${
                isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
              } w-full shadow rounded sm:rounded-lg`}
            >
              <div className="flex flex-col gap-10 w-full p-10">
                <div>
                  {element && (
                    <ElementHeader
                      category={watch('category') || element.category}
                      atomic_mass={watch('atomic_mass') || element.atomic_mass}
                      element_img={watch('element_img') || element.element_img}
                      name={watch('name') || element.name}
                      number={watch('number') || element.number}
                      symbol={watch('symbol') || element.symbol}
                      height="300px"
                    />
                  )}
                </div>

                <div className="flex gap-10 w-full">
                  <div className="w-full flex flex-col gap-4">
                    <Input
                      className="w-full"
                      label="Name"
                      type="text"
                      error={formState.errors.name}
                      {...register('name')}
                    />
                    <Input
                      className="w-full"
                      label="Atomic Number"
                      type="text"
                      error={formState.errors.number}
                      {...register('number')}
                    />
                    <Input
                      className="w-full"
                      label="Atomic Mass"
                      type="text"
                      error={formState.errors.atomic_mass}
                      {...register('atomic_mass')}
                    />
                    <Input
                      className="w-full"
                      label="Appearance"
                      type="text"
                      {...register('appearance')}
                    />
                    <Input
                      className="w-full"
                      label="Boil"
                      type="text"
                      {...register('boil')}
                    />
                    <Input
                      className="w-full"
                      label="Density"
                      type="text"
                      {...register('density')}
                    />
                    <Input
                      className="w-full"
                      label="Melt"
                      type="text"
                      {...register('melt')}
                    />
                    <Input
                      className="w-full"
                      label="Horizontal Position"
                      type="text"
                      {...register('xpos')}
                    />
                  </div>
                  <div className="w-full flex flex-col gap-4">
                    <Input
                      className="w-full"
                      label="Symbol"
                      type="text"
                      {...register('symbol')}
                    />
                    <Input
                      className="w-full"
                      label="Discovered By"
                      type="text"
                      {...register('discovered_by')}
                    />
                    <Input
                      className="w-full"
                      label="Named By"
                      type="text"
                      {...register('named_by')}
                    />
                    <Input
                      className="w-full"
                      label="Period"
                      type="text"
                      {...register('period')}
                    />
                    <Input
                      className="w-full"
                      label="Phase"
                      type="text"
                      {...register('phase')}
                    />

                    <Input
                      className="w-full"
                      label="Electron Affinity"
                      type="text"
                      {...register('electron_affinity')}
                    />
                    <Input
                      className="w-full"
                      label="Molar Heat"
                      type="text"
                      {...register('molar_heat')}
                    />
                    <Input
                      className="w-full"
                      label="Vertical Position"
                      type="text"
                      {...register('ypos')}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Input
                    className="w-full"
                    label="Spectral Image"
                    type="text"
                    {...register('spectral_img')}
                  />
                  <Input
                    className="w-full"
                    label="Source"
                    type="text"
                    {...register('source')}
                  />
                  <Input
                    className="w-full"
                    label="Electron Configuration"
                    type="text"
                    {...register('electron_configuration')}
                  />
                  <Input
                    className="w-full"
                    label="Electron Configuration Semantic"
                    type="text"
                    {...register('electron_configuration_semantic')}
                  />

                  <Input
                    className="w-full"
                    label="Element Image"
                    type="text"
                    {...register('element_img')}
                  />
                  <Input
                    className="w-full h-auto"
                    label="Category"
                    type="select"
                    options={[
                      { id: '1', name: 'nobleGases' },
                      { id: '2', name: 'alkaliMetals' },
                      { id: '3', name: 'alkalineEarthMetals' },
                      { id: '4', name: 'postTransitionMetals' },
                      { id: '5', name: 'transitionMetals' },
                      { id: '6', name: 'lanthanoids' },
                      { id: '7', name: 'actinoids' },
                      { id: '8', name: 'nonMetal' },
                      { id: '9', name: 'metalloid' }
                    ]}
                    {...register('category')}
                  />
                  <Input
                    className="w-full"
                    label="Enabled"
                    type="checkbox"
                    {...register('enabled')}
                  />
                  <Input
                    className="w-full h-auto"
                    label="Summary"
                    type="text"
                    rows={3}
                    {...register('summary')}
                  />
                </div>
              </div>

              {/* CANCEL / SAVE BUTTONS */}
              <div
                className={`${
                  isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
                } px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse rounded sm:rounded-lg`}
              >
                <Button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:bg-blue-600  sm:ml-3 sm:w-auto sm:text-sm"
                  label="Save"
                  onClick={handleSubmit(handleSave)}
                />
                <Button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  label="Cancel"
                  onClick={handleCancel}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Update

import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Input } from 'components'
import { SubmitHandler, useForm } from 'react-hook-form'
import { schema, FormData } from './initial-state'
import Link from 'next/link'
import useDarkMode from 'hooks/use-dark-theme'
import router from 'next/router'

const Create = () => {
  const { isDarkMode } = useDarkMode()
  const { register, handleSubmit, formState, reset, setValue } =
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
    symbol
  }) => {
    console.table({
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
      symbol
    })
  }
  const handleCancel = () => router.push('/elements')

  return (
    <div className="flex flex-col w-11/12 h-full items-centers">
      {/* HEADER / BREADCRUMB */}
      <div className="w-full h-20 mb-10">
        <h4 className="flex gap-2 items-center text-gray-600 text-sm mb-10">
          <Link href="/">Home</Link> {'>'}
          <Link href="/elements/">Elements</Link> {'>'}
          <span className="text-blue-500 ">Create Element</span>
        </h4>
        <h1
          className={`${
            isDarkMode ? 'text-gray-100' : 'text-gray-900'
          } text-left text-3xl`}
        >
          Create Element
        </h1>
      </div>

      {/* MAIN CONTAINER */}
      <div className="flex flex-col mt-5">
        <div className="-my-2 sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div
              className={`${
                isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
              } w-full shadow rounded sm:rounded-lg`}
            >
              <div className="flex flex-col gap-10 w-full p-10">
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
                  </div>
                  <div className="w-full flex flex-col gap-4">
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
                      label="Symbol"
                      type="text"
                      {...register('symbol')}
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
                    {...register('spectral_img')}
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
                    type="text"
                    rows={3}
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
              <div
                className={`${
                  isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
                } px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse`}
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

export default Create

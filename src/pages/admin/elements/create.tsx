import Link from 'next/link'
import router from 'next/router'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import { Button, ElementHeader, Input } from '../../../components'
import { FormData } from '../../../models/elements-form'
import useDarkMode from '../../../hooks/use-dark-theme'
import { createElement } from '../../../services/elements/create'

const Create = () => {
  const schema = yup.object({
    name: yup
      .string()
      .min(3, 'Minimun of 3 characters!')
      .required('Element name is required!'),
    number: yup.number().required('Please, provide the atomic number'),
    atomic_mass: yup.number().required('Atomic Mass is required'),
    summary: yup.string().nullable(),
    appearance: yup.string().nullable(),
    boil: yup.number().optional(),
    category: yup.string().required('Element category is required'),
    density: yup.number().optional(),
    melt: yup.number().optional(),
    molar_heat: yup.number().optional(),
    discovered_by: yup.string().nullable(),
    named_by: yup.string().nullable(),
    period: yup.number().optional(),
    xpos: yup.number().optional(),
    ypos: yup.number().optional(),
    phase: yup.string().nullable(),
    symbol: yup.string().nullable(),
    source: yup.string().nullable(),
    spectral_img: yup.string().nullable(),
    electron_configuration: yup.string().nullable(),
    electron_configuration_semantic: yup.string().nullable(),
    electron_affinity: yup.number().optional(),
    element_img: yup.string().nullable(),
    enabled: yup.bool().default(true)
  })
  const { isDarkMode } = useDarkMode()
  const { register, handleSubmit, formState, reset, watch } = useForm<FormData>(
    {
      mode: 'onChange',
      resolver: yupResolver(schema)
    }
  )

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
    createElement({
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
        if (response.status === 201) {
          Swal.fire('Success!', 'Element was created!', 'success')
          reset()
          router.push('/elements')
        }
      })
      .catch((error: any) => {
        Swal.fire(
          'Error',
          `Error to create this element! <br> ${error.response.data.message}`,
          'error'
        )
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
                <div>
                  <ElementHeader
                    category={watch('category') || 'nobleGases'}
                    atomic_mass={watch('atomic_mass')}
                    element_img={watch('element_img') || ''}
                    name={watch('name') || 'Unknown'}
                    number={watch('number') || 0}
                    symbol={watch('symbol') || 'Unk'}
                    height="300px"
                  />
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
